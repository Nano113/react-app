const Footer = ({length}) => {
  // const today = new Date();
  // let day = String(today.getDate()).padStart(2,'0');
  // let mon = String(today.getMonth() + 1).padStart(2, '0')
  // let yea = today.getFullYear();

  // const FallD = `${mon}/${day}/${yea}`

  // console.log(FallD);
 
  return (
    <footer className="footer">
      <h1>{length} {length ===1 ?'item':'items'}</h1>
    {/* <p>Date {FallD}</p> */}
    </footer>
  );
};

export default Footer;
