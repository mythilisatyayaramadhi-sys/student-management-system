function StudentList({ arr }){
    return(
     <>
      <h1>Students</h1>
      {arr.map((st) => (
        <div key = {st.id}>
          <h2>{st.name}</h2>
        </div>
      ))}
     </>
    ) 
};
export default StudentList;