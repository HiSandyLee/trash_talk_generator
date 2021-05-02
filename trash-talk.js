function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function trashTalk(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  const job = options.job
  const occupation = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  if (job === occupation) {
    trashCollection = trashCollection.concat(sample(task.engineer))
  }

  if (job === occupation) {
    trashCollection = trashCollection.concat(sample(task.designer))
  }

  if (job === occupation) {
    trashCollection = trashCollection.concat(sample(task.entrepreneur))
  }
  if (!job) {
    return '請輸入幹話對象！！！'
  }
  return `身為一個${occupation[job]},${sample(task[job])},${sample(phrase)}吧!`
}

module.exports = trashTalk
