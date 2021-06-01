import icMPrinter from './assets/img/icon_metro-printer.svg';
//import icIonicIosSettings from './assets/img/icon_ionic-ios-settings.svg';
import icNfce from './assets/img/fas file-nfce.png';
import icNfe from './assets/img/fas file-nfe.png';
//import icTitulos from './assets/img/titulos.png';
//import icPedidos from './assets/img/pedidos.png';
var data = 
 [
      {
        id: 1,
        title: 'NFC-e',
        type: 'group',
        icon: '',//'fas fa-file',
        src: icNfce,
        url: '#',
      },
      {
        id: 2,
        title: 'NF-e',
        type: 'group',
        icon: '',//'fas fa-file',
        src:icNfe,
        url: '#',
      },
      {
        id: 3,
        title: 'Títulos',
        type: 'group',
        icon: 'fas fa-file-invoice',
        src: 'icTitulos',
        url: '#',
      },
      {
        id: 4,
        title: 'Pedidos',
        type: 'group',
        icon: 'fas fa-list-alt',
        src: '',
        url: '#',
      },
      {
        id: 5,
        title: 'Produtos',
        type: 'group',
        icon: 'fas fa-box-open',
        src: '',
        url: '#',
      }, 
      {
        id: 6,
        title: 'Impressoras',
        type: 'group',
        icon: '',
        src: icMPrinter,
        url: '#',
      },
      {
        id: 7,
        title: 'Integrações',
        type: 'group',
        icon: 'fas fa-sitemap',
        src: '',
        url: '#',
      },
      {
        id: 8,
        title: 'Configurações de Sistema',
        type: 'group',
        icon: 'fas fa-cogs',
        src: '',
        url: '#',
      },
      {
        id: 9,
        title: 'Tablet',
        type: 'group',
        icon: 'fas fa-tablet-alt',
        src: '',
        url: '#',
      },
      {
        id: 10,
        title: 'Clientes',
        type: 'group',
        icon: 'fas fa-users',
        src: '',
        url: '#',
      },
      // {
      //   id: 11,
      //   title: 'Usuário',
      //   type: 'group',
      //   icon: 'fas fa-user',
      //   src: '',
      //   url: '#',
      // },
    ]
export default data;