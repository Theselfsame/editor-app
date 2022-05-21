import './App.css';

function Rend(){
  const example = '{UfCrm141652880096616}'
  function f1() {
    let list = document.querySelector('.textarea1')
    let list2 = list.value.replace(/_/gm, '')
    let list3 = list2.replace(/(UFCRM)/gim, 'UfCrm')
    let list4 = list3.replace(/(\w+)/gim, "{$&}")
    const outArea = document.querySelector('.textarea2')
    outArea.value = list4
  }
  return(
    <>
      <h3>Вставить столбец с данными в ЛЕВОЕ поле и кликнуть вне текстового поля. Результат в ПРАВОМ поле.</h3>
      <div><code className="example">UF_CRM_18_1653042170  -&gt; {example}</code></div>
      <textarea className="textarea textarea1" onChange={f1}></textarea>
      <textarea className="textarea textarea2"></textarea>
    </>
  )
}
function App() {
  return(
    <div>
      <Rend></Rend>
    </div>
  )
}


export default App;
