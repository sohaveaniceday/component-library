import { useRef } from 'react'

export const useCreation = (factory: Function, deps: any[]) => {
  const { current } = useRef({
    deps,
    obj: undefined,
    initialized: false,
  })
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps
    current.obj = factory()
    current.initialized = true
  }
  return current.obj
}

function depsAreSame(oldDeps: any[], deps: any[]): boolean {
  if (oldDeps === deps) return true
  for (const i in oldDeps) {
    if (oldDeps[i] !== deps[i]) return false
  }
  return true
}
