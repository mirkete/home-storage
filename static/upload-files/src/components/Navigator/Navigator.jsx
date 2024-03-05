import "./Navigator.css"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { RouteContext } from "../../contexts/RouteContext";
import { HomeIcon } from "../../icons/HomeIcon"

export function Navigator(){
  const route = useContext(RouteContext)
  const path = route?.path ?? ""

  let folders = ["Home"]
  if(path !== ""){
    let innerPath = path.split("/").slice(1)
    folders = [...folders, ...innerPath]
  }

  const getLink = (folder) => {
    let folderIndex = folders.indexOf(folder)
    let routeArray = folders.slice(1, folderIndex+1)
    let linkRoute = "/" + routeArray.join("/")
    return linkRoute
  }

  const getNavSlash = (index) => {
    if(index < folders.length - 1){
      return "nav-tag-slash"
    }

    return ""
  }

  return (
    <div className="navigator">
      <Link to="/"><HomeIcon/></Link>
      {
        folders.map((folder, index) => {
          return (
            <Link key={folder} to={getLink(folder)} className={`nav-tag ${getNavSlash(index)}`}>{folder}</Link>
          )
        })
      }
    </div>
  )
}