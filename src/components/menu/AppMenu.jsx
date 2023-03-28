import {Drawer,Menu} from "antd"
import {MenuOutlinded} from "@ant-design/icons"
import itemCard from "../card/itemCard";

function AppMenu() {

    return (
        <div style= {{display:"flex", flexDirection:"row"}}>
            <Menu mode={"vertical"} items={[
                {
                    label: "Список всех фильмов", //кнопки для CRUD системы
                    key: "listFilms",
                },
                {
                    label: "Добавить новый фильм", //
                    key: "addFilms",
                },
                {
                    label: "Удалить фильм",
                    key: "deleteFilms",
                },
                {
                    label: "Поиск фильма",
                    key: "findFilms",
                },


            ]}>

            </Menu>

            <itemCard />
        </div>
    );
}
export default AppMenu;