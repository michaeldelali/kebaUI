// src/LoadableApp.js
import React  from "react";
import Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./App"),
  loading() {
    return <div>Loading...</div>;
  },
  timeout: 10000 // 10 seconds
});

// export default function LoadableApp() {
//   return (
//     <LoadApp/>
//   )
// }

export default class LoadableApp extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
