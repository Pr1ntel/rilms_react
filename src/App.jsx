import AppMenu from "./AppMenu";
import {Drawer} from "antd";
import {useState} from "react";
import {MenuOutlined} from "@ant-design/icons";

function App() {
  const [openMenu, setOpenMenu] = useState(true);

  return (
      <div style={{backgroundColor:'darkorange', height:60,paddingLeft: 12,paddingTop:12}}>
        <div>
          <MenuOutlined style={{color: 'white',fontSize:30}}
                        onClick={() => {
                          setOpenMenu(true)}
                        }/>
        </div>
        <AppMenu />
        <Drawer open = {openMenu}
                onClose={() =>{
                  setOpenMenu(true);
                }}
                clossable = {true}
        ><AppMenu/>
        </Drawer>
      </div>

  )
}
export default App;
