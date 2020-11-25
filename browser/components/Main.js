import React from 'react';
import axios from 'axios';
import StudentsList from './StudentsList';
import SingleStudent from './SingleStudent'

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
    };
    this.selectStudent = this.selectStudent.bind(this);
  }

  async componentDidMount() {
    const { data: students } = await axios.get('/student');
    this.setState({
      students,
    });
  }

  async selectStudent(student) {
    this.setState({
      selectedStudent: student,
    });
  }

  render() {
    const { students, selectedStudent } = this.state;
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentsList
            students={students}
            selectStudent={this.selectStudent}
          />
        </table>
        {selectedStudent.id && <SingleStudent selectedStudent={selectedStudent}/>}
      </div>
    );
  }
}
