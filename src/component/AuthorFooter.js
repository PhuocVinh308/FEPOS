import logo from "../logo.png";
function AuthorFooter(params) {
  return (
    <div className="author-footer d-flex align-items-end justify-content-center">
      <img width="65px" src={logo} alt="" />
      <p className="">Được tạo bởi N.H.P.V</p>
    </div>
  );
}
export default AuthorFooter;
