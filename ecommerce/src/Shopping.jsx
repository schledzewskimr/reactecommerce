import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import "./index.css";
import Item from "./item"


export default class Shopping extends Component {

  state = {
    items: [
      {
        id: 1,
        itemName: "monitor1",
        price: 300,
        type: "monitor",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hKiJ2wyO2pQyOZlTk-Z5_wHaEV%26pid%3DApi&f=1"
      },
      {
        id: 2,
        itemName: "monitor2",
        price: 150,
        type:"monitor",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._U329xWeIUrxxBTgE6P5MAHaHa%26pid%3DApi&f=1"
      },
      {
        id: 3,
        itemName: "monitor3",
        price: 900,
        type:"monitor",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HEkCWqVc5LQWxbhBWEt2bwHaHS%26pid%3DApi&f=1"
      },
      {
        id: 4,
        itemName: "monitor4",
        price: 500,
        type: "monitor",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.eQpwglPSCmUrqMyYzRBSywHaHa%26pid%3DApi&f=1"
      },
      {
        id: 5,
        itemName: "monitor5",
        price: 500,
        type: "monitor",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3KtT7hJSPTfqXcsaldueNwHaGs%26pid%3DApi&f=1"
      },
      {
        id: 6,
        itemName: "monitor6",
        price: 500,
        type: "monitor",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.L2SAx8nUIjSy6LPS1uC90wHaGi%26pid%3DApi&f=1"
      },
      {
        id: 7,
        itemName: "monitor7",
        price: 500,
        type: "monitor",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.eQpwglPSCmUrqMyYzRBSywHaHa%26pid%3DApi&f=1"
      },
      {
        id: 8,
        itemName: "speakers1",
        price: 200,
        type: "sound",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.6x5wXhxWqsAhX3UWELITegHaHa%26pid%3DApi&f=1"
      },
      {
        id: 9,
        itemName: "speakers2",
        price: 60,
        type: "sound",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fslcVAshRRxO2lC5wg4pvwHaHc%26pid%3DApi&f=1"
      },
      {
        id: 10,
        itemName: "speakers3",
        price: 60,
        type:"sound",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HWVXkMrW6XpE3_MGKUlNOQHaHa%26pid%3DApi&f=1"
      },
      {
        id: 11,
        itemName: "speakers4",
        price: 60,
        type:"sound",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hDxupjKRyX6iR9CezmDe_gHaHa%26pid%3DApi&f=1"
      },
      {
        id: 12,
        itemName: "headphones1",
        price: 40,
        type: "sound",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.D4oeRBAfx2JsQnx45k5LugHaHa%26pid%3DApi&f=1"
      },
      {
        id: 13,
        itemName: "headphones2",
        price: 100,
        type: "sound",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qIbVDNrFXsnUfRKuvrBoOQHaH4%26pid%3DApi&f=1"
      },{
        id: 14,
        itemName: "headphones3",
        price: 100,
        type: "sound",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.oOVud0hso9naklyl6ciIVQHaHa%26pid%3DApi&f=1"
      },
      {
        id: 15,
        itemName: "headphones4",
        price: 100,
        type: "sound",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.i5p99LSPYim2JLX0p8UtsgHaHa%26pid%3DApi&f=1"
      },
      {
        id: 16,
        itemName: "livestock1",
        price: 100,
        type: "livestock",
        quantity: 0,
        src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.rig7wCVUx-JytfTxE-x3pAHaE7%26pid%3DApi&f=1"
      },
      {
        id: 17,
        itemName: "livestock2",
        price: 100,
        type: "livestock",
        quantity: 0,
        src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9upYHv5CG5m3C9uc35JvJAHaH_%26pid%3DApi&f=1"
      },
      {
        id: 18,
        itemName: "gamingPC1",
        price: 1200,
        type: "computer",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fc3ffe9f7-f38b-4bf9-97ad-8454cfb6adaa_1.126d28bd6069d42a4a8792948bf75ae3.jpeg&f=1&nofb=1"
      },
      {
        id: 19,
        itemName: "gamingPC2",
        price: 900,
        type: "computer",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.is2BLzXMYU0f7BY2WewM_QHaH6%26pid%3DApi&f=1"
      },
      {
        id: 20,
        itemName: "gamingPC3",
        price: 3000,
        type:"computer",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.cFwejlqTsP9Esu-lsypSLwHaIb%26pid%3DApi&f=1"
      },
      {
        id: 21,
        itemName: "gamingPC4",
        price: 2100,
        type:"computer",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.l-TbNU_XFPoC1CcyNfuCtwHaIo%26pid%3DApi&f=1"
      },
      {
        id: 22,
        itemName: "PC1",
        price: 2100,
        type:"computer",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.4XqrVoEHj2DmHMELq7o47wHaHa%26pid%3DApi&f=1"
      },
      {
        id: 23,
        itemName: "PC2",
        price: 2100,
        type:"computer",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.uoJ-UFsGDfkoUCvf5Z8vbwHaHa%26pid%3DApi&f=1"
      },
      {
        id: 24,
        itemName: "PC3",
        price: 2100,
        type:"computer",
        quantity: 0,
        src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wtKpwrE_CyKPV1m41NYGlQHaHa%26pid%3DApi&f=1"
      },
      {
        id: 25,
        itemName: "livestock3",
        price: 100,
        type: "livestock",
        quantity: 0,
        src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.TB9hmJElr_86C7n2dI6iEAHaFj%26pid%3DApi&f=1"
      },
      {
        id: 26,
        itemName: "livestock4",
        price: 100,
        type: "livestock",
        quantity: 0,
        src:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HV59HGxqyZa0i7zCqvHE0gHaE7%26pid%3DApi&f=1"
      }
    ]
  }

  render() {

    return (
      
      <div>
        <div className="CartItems">
          <h4>items in cart: </h4>
        </div>
          <div className="Container">
          {this.state.items.map(items => {
            return <Item key={items.id} item={items}/>
            })}
          </div>
      </div>
    )
  }
}
