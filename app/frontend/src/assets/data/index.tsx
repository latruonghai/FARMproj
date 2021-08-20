// import { HomeIcon } from '@material-ui/icons/Home';
import { SideBarItem } from '../../types/index';
import HomeIcon from '@material-ui/icons/Home';
import { BookmarksOutlined } from '@material-ui/icons';

const data = ["Home", "About", {"name": "Categories",
                                "categories": ["News", "Sports", "Title"]}
                            ,   {"name": "Languages",
                                "categories": ["VietNam", "English"]}];

const dataSideBar:SideBarItem[] = [
    {name: "Home", component: <HomeIcon/>},
    {name: "See blogs", component: <BookmarksOutlined/>}
]
export default data;
export {dataSideBar};