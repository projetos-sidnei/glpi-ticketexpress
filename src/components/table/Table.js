import React from 'react';
import '../../assets/scss/styles.scss';
import MaterialTable from 'material-table';
import LOCALIZATION from '../../utils/util-materials';
import apiUsers from '../../services/api_users';
import apiFilter from '../../services/api_filter';
import TableLoading from '../../components/table-loading/TableLoading';
import { Redirect } from 'react-router-dom';

export default class Table extends React.Component {
  state = {
    name: '',
    id: '',
    loading: true,
    redirect: '',
    storage: false,
    data: []
  };

  columns = [
    {
      title: 'Código',
      field: 'cod',
      editable: 'never',
      cellStyle: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: 15,
      },
    },
    {
      title: 'Título',
      field: 'titulo',
      editable: 'never',
      cellStyle: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: 550,
      },
    },
    {
      title: 'Status',
      field: 'status',
      editable: 'never',
      cellStyle: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        maxWidth: 50,
      },
    },
    {
      title: 'Abertura',
      field: 'abertura',
      editable: 'never',
      type: 'date',
      cellStyle: { whiteSpace: 'nowrap' },
    },
    {
      title: 'Fechamento',
      field: 'fechamento',
      editable: 'never',
      type: 'date',
      cellStyle: { whiteSpace: 'nowrap' },
    },
  ];

  componentDidMount() {
    //this.loadApiUser();
  }

  clearStorageAll = () => {
    localStorage.removeItem('session_token');
    this.setState({
      redirect: '/login',
      storage: true
    })
  }

  loadApiUser = async () => {
    try {
      let session_token = localStorage.getItem('session_token');
      if (session_token) {
        const res = await apiUsers.getApiUser(session_token, 'sidnei.silva');
        if (res.status === 200) {
          let user_id = res.data.resultado.data[0]['User.id'];
          this.loadApiTicket(session_token, user_id);
        }
      }
    } catch (err) {
      this.clearStorageAll();
    }
  };

  loadApiTicket = async (session_token, id) => {
    if (session_token) {
      const res = await apiFilter.getApiTicket(session_token, id);

      const listTicket = res.data.resultado.data;

      listTicket.map(item => {

        let status = this.transformNumberValueStatusInWords(item['Ticket.status']);

        const dataTicket = {
          cod: item['Ticket.id'],
          titulo: item['Ticket.name'],
          status: status,
          abertura: item['Ticket.date'],
          fechamento:''
        };

        this.setState(prevState => ({
          data: [...prevState.data, dataTicket]
        }));
        return dataTicket;
      });
      this.setState({ loading: false });
    }
  };


  transformNumberValueStatusInWords = (value) => {
    let status;
    switch (value) {
      case 1:
        status = 'Novo';
        return status;
      case 2:
        status = 'Processando(atribuído)';
        return status;
      case 3:
        status = 'Processando(planejado)';
        return status;
      case 4:
        status = 'Pendente';
        return status;
      case 5:
        status = 'Solucionado';
        return status;
      case 6:
        status = 'Fechado';
        return status;
      default:
        return 'A-Null';
    }
  }

  render() {
    const load = this.state.loading;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="table">
        {load ? (<div className="loading">
          <TableLoading />
        </div>
        ) : (
            <MaterialTable
              title=""
              localization={LOCALIZATION}
              columns={this.columns}
              data={this.state.data}
              options={{
                actionsColumnIndex: -1,
                defaultExpanded: false,
                pageSize: 9,
                pageSizeOptions: [9],
              }}
     
              //onRowClick={(event, rowData, togglePanel) => togglePanel()}
            />)}
      </div>

    );
  }
}
