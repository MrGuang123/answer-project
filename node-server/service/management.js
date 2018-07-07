import management from '../dao'
console.log('***********')
console.log(management)
console.log('***********')
// function getPulltopic() {
//   return management.getPulltopic
// }
// const pulltopicService = getPulltopic()
export function pulltopicService() {
  return management.getPulltopic
}
