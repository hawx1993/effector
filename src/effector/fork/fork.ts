import {is} from '../is'
import {assert} from '../throw'
import type {Domain, ValuesMap, HandlersMap, Scope} from '../unit.h'
import {normalizeValues} from './util'
import {createScope} from './createScope'

type ForkConfig = {
  values?: ValuesMap
  handlers?: HandlersMap
}

export function fork(
  targetOrConfig?: Domain | ForkConfig | Scope,
  optionalConfig?: ForkConfig,
) {
  const hasTarget = is.unit(targetOrConfig)
  let target: Domain | Scope | undefined = hasTarget
    ? targetOrConfig
    : undefined
  let config: ForkConfig | undefined = hasTarget
    ? optionalConfig
    : targetOrConfig

  const scope = createScope(target)

  if (config?.values) {
    const valuesSidMap = normalizeValues(config.values, unit =>
      assert(is.store(unit), 'Values map can contain only stores as keys'),
    )
    Object.assign(scope.sidValuesMap, valuesSidMap)
    scope.fromSerialize =
      !Array.isArray(config.values) && !(config.values instanceof Map)
  }
  if (config?.handlers) {
    Object.assign(
      scope.handlers,
      normalizeValues(config.handlers, unit =>
        assert(
          is.effect(unit),
          `Handlers map can contain only effects as keys`,
        ),
      ),
    )
  }
  return scope
}
