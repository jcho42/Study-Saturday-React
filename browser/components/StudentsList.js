import React from 'react';

const Students = (props) => {
  const { students, selectStudent } = props;
  return (
    <tbody>
      {students.map((student) => (
        <tr key={student.id}>
          <td>{student.fullName}</td>
          <td onClick={() => selectStudent(student)}>Details</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Students;
