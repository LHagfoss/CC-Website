

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-11-20'

// Vi legger inn verdiene direkte her for å fikse feilen:
export const dataset = "production"
export const projectId = "xsdlak3w"
// assertValue(process.env.NEXT_PUBLIC_SANITY_DATASET, 'Missing NEXT_PUBLIC_SANITY_DATASET')
// assertValue(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 'Missing NEXT_PUBLIC_SANITY_PROJECT_ID'
export const useCdn = false // Sett til false hvis du statisk genererer sider, bruker ISR eller tag-basert revalidering
// function assertValue<T>(v: T | undefined, errorMessage: string): T {
//  if (v === undefined) {
//    throw new Error(errorMessage)
//  }
//
//  return v
//}
