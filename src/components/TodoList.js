const TodoList = ({ datalist }) => {
    return (
      <div className="content-data">
        <ul className="list-group">{datalist}</ul>
      </div>
    );
  };
  
  export default TodoList;