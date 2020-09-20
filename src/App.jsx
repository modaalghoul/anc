import React from 'react';
import './App.css';
import logo from './logo.jpg'
import arabicMatch from './utils/arabicMatch'
import Student from './components/Student'
import { Info } from './components/Info'
import data from './utils/studentsData'


class App extends React.Component {
  state = {
    name: '',
    names: data,
    birthdate: new Date(),
    person: null
  }

  render() {
    const { name, names, birthdate, person } = this.state

    const handleSearch = (e) => {
      this.setState({ person: null })
    }

    const setPerson = (person) => {
      this.setState({ person })
    }

    const setBirthDate = (date) => {
      this.setState({ birthdate: date })
    }

    const renderNames = () => {
      if (name === '') {
        return null
      }
      return names.filter(std => arabicMatch(this.state.name.trim(), std.Name.trim())).splice(0, 10)
        .map(std => <Student key={std.Number} student={std} setPerson={setPerson} />)
    }

    return (
      <div className="App mt-5 ">
        <img className="mb-3" src={logo} alt="" />
        <h5>مدرسة ذكور مخيم عمان الاعدادية الاولى</h5>
        <p>الحصول على رقم الدخول للمنصة الحكومية</p>

        <div className="m-2">
          <label> اسم الطالب: </label>
          <input type="text" onChange={(e) => { this.setState({ name: e.target.value, person: null }) }} />
          <button onClick={(e) => handleSearch(e)} >بحث</button>
        </div>

        {
          person ? <Info birthdate={birthdate} setBirthDate={setBirthDate} person={person} /> : renderNames()
        }

        <div className="copyright">developed by <span>alghoul</span></div>
      </div>
    );
  }
}

export default App;





