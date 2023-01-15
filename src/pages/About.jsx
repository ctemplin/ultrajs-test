export default function AboutPage(props) {
  return (
    <div>
      About page, <a onClick={props.handleClick}>{props.msgText}</a>
      <div style={props.style()}>About Message</div>
    </div>
  );
}