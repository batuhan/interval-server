// create basic globally unique IDs - helpful for autogenerated inputs, etc.
// inspired by https://github.com/jamiebuilds/gud

const key = '__iv_global_unique_id__'
const globalObject = typeof window !== 'undefined' ? window : global

export default function uniqueId() {
  return (globalObject[key] = (globalObject[key] || 0) + 1)
}
