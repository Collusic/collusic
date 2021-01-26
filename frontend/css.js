module.exports = {
    navBar:(i)=>{
        return `
        .nav-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            margin: 0;
            padding: 0;
            background-color: darkslategray;
            list-style-type: none;
            position: fixed;
            top: 0;
            z-index: 1;
        }
  
        .nav-item {
            padding: 15px;
            cursor: pointer;
        }
  
        .nav-item a {
            text-align: center;
            text-decoration: none;
            color: white;
        }
  
        .nav-item:nth-child(${i}) {
            background-color: lightseagreen;
        }
  
        .nav-item:hover {
            background-color: grey;
        }
        `;
    }
}