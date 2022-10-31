import "./topbar.css"
import {Search, Person} from "@mui/icons-material"

export default function Topbar() {
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">NewSocial</span>
            </div>
            <div className="topbarCentre">
                <div className="searchbar">
                    <Search/>
                    <input placeholder="Search for friends , Post or any video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home Page</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
