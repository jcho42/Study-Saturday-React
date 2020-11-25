import React from 'react';

const avgGrade = (tests) => {
  const numtest = tests.length;
  const gradeArr = tests.map((test) => test.grade);
  const totalGrade = gradeArr.reduce((a, c) => {
    return a + c;
  });
  const avgGrade = Math.round(totalGrade / numtest);
  return avgGrade;
};

const SingleStudent = (props) => {
  const { selectedStudent } = props;
  return (
    <div>
      <h3>{selectedStudent.fullName}</h3>
      <h3>Average Grade: {avgGrade(selectedStudent.tests)}</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {selectedStudent.tests.map((test) => (
              <tr key={test.id}>
                <td>{test.subject}</td>
                <td>{test.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleStudent;
