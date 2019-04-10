import React, { Component } from 'react'
import { connect } from 'react-redux'/* 
A เราจะไม่ใช้ state แล้วนะครับ แล้วให้จำไว้นะครับว่า การที่เรา
เชื่อมกับ redux นั้นด้วย connect เราจะได้ props มาใช้งาน สั่งเกตุ
ได้จากโค้ดด้านล่างนะครับ เรียกใช้ this.props กันให้พรึมเลยทีเดียว
*/


class Home extends Component {
  render() {
    return (
      <div>
          <h3>อายุของคุณ: {this.props.age} ปี</h3>
          <button className="button" onClick={this.props.increteAge}>+ คลิกบวกอายุ</button>
          <button className="button" onClick={this.props.decreteAge}>- คลิกลบอายุ</button>
      </div>
    )
  }/*
  B จะสังเกตุว่าไม่มีการใช้ this.state แล้วนะครับ เราเปลียนมาใช้ this.props แทน เพราะเราใช้ props 
  เข้าถึงส่วนต่างๆของ redux แทนครับ
  */ 

}

function mapStateToProps(state) {
  return {
      age: state.counter
  }
}
/* 
C mapStateToProps โดย Function นี้จะรับ parameter เป็น state ที่ได้มาจาก redux store (ในไฟล์ src/index.js) โดยที่ไฟล์ src/index/js
จะมี reducer ที่ชื่อ countAge นะครับถ้าจำไม่ได้ย้อนกลับไปดูนะครับ แล้ว return ค่า object ออกไป โดยในนี้ตั้งชื่อ object ว่า age
*/

function mapDispatchToProps(dispatch) {
  return {
      increteAge: () => {
          dispatch({type: 'INCREMENT'})
      },
      decreteAge: () => {
          dispatch({type: 'DECREMENT'})
      }
  }    
}
/* 
D = mapDispatchToProps โดย function นี้จะรับ parameter เป็น dispatch แล้ว return object ซึ้งในโค้ดจะ return properties
ที่ชื่อว่า increteAge และ decreteAge ซึ้งสร้างมันเป็น function ที่เวลาเรียกใช้มันก็จะเรียกคำสั่ง dispatch แล้วทำการส่ง type ไปครับ
*/

/* 
ทั้ง mapStatetoProps และ mapDispatchToProps มันจะกลายไปเป็น props ของ Home ดังนั้นเวลาเราเรียกใช้ เราจึงเรียกใช้
ด้วยคำสั่ง this.props.age, this.props.increteAge และ this.props.decreteAge
*/

export default connect(mapStateToProps, mapDispatchToProps)(Home)/* 
E ข้ามมาข้อ E ก่อนนะครับ ปกติเราจะ export default Home ใช้มัยครับ
แต่พอเราใช้ connect เราจะต้อง export default connect แทนเหมือนโค้ดข้างบน โดยตัว connect จะรับ parameter 2 ตัว
(จริงๆมันมากกว่า 2 ตัวครับ แต่ส่วนใหญ่ใช้กัน 2 ตัว) ซึ้ง parameter 2 ตัวนั้นคือ mapStateToProps, และ mapDispatchToprops
โดยทั้ง 2 ตัวต่างก็เป็น function ครับ

*/
