const extractPropertyValues = (arr: any[], prop: string): string[] => arr.map(item => item[prop])

export default extractPropertyValues;