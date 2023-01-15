export default function HomePage(props) {
  return (
    <div>
      Home page, <a onClick={props.handleClick}>{props.msgText}</a>
      <div style={props.style()}>Home Message</div>
    </div>
  );
}