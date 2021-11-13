/* eslint-disable no-unused-vars */
import {createStore, createEvent, sample, Event, Store} from 'effector'
const typecheck = '{global}'
type AN = {a: number}
const $num = createStore(0)
const a = createStore({a: 0})
const num = createEvent<number>()
const aNum = createEvent<AN>()
const aT = createStore({a: 0})
const aNumT = createEvent<AN>()
const fn0 = () => ({a: 0})
const fn1 = ({a}: AN) => ({a})
const fn2 = ({a}: AN, c: number) => ({a: a + c})

describe('no target', () => {
  test('no target, none clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: Event<AN> = sample({filter: () => true, source:aNum    })}
      {const result: Event<AN> = sample({filter: () => true, source:a       })}
      {const result: Event<AN> = sample({filter: () => true, source:{a:$num}})}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
  test('no target, event clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: Event<AN> = sample({filter: () => true, source:aNum    , clock:num})}
      {const result: Event<AN> = sample({filter: () => true, source:a       , clock:num})}
      {const result: Event<AN> = sample({filter: () => true, source:{a:$num}, clock:num})}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: Event<number>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: Event<number>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: Event<number>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
  test('no target, store clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: Event<AN> = sample({filter: () => true, source:aNum    , clock:$num})}
      {const result: Event<AN> = sample({filter: () => true, source:a       , clock:$num})}
      {const result: Event<AN> = sample({filter: () => true, source:{a:$num}, clock:$num})}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: Store<number>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: Store<number>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: Store<number>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
  test('no target, tuple clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: Event<AN> = sample({filter: () => true, source:aNum    , clock:[num,$num]})}
      {const result: Event<AN> = sample({filter: () => true, source:a       , clock:[num,$num]})}
      {const result: Event<AN> = sample({filter: () => true, source:{a:$num}, clock:[num,$num]})}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: (Store<number> | Event<number>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: (Store<number> | Event<number>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: (Store<number> | Event<number>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
})
describe('unit target', () => {
  test('unit target, none clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: Event<AN> = sample({filter: () => true, source:aNum    , target:aNumT})}
      {const result: Store<AN> = sample({filter: () => true, source:aNum    , target:aT   })}
      {const result: Store<AN> = sample({filter: () => true, source:a       , target:aT   })}
      {const result: Event<AN> = sample({filter: () => true, source:a       , target:aNumT})}
      {const result: Event<AN> = sample({filter: () => true, source:{a:$num}, target:aNumT})}
      {const result: Store<AN> = sample({filter: () => true, source:{a:$num}, target:aT   })}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Event<AN>; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
  test('unit target, event clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: Event<AN> = sample({filter: () => true, source:aNum    , clock:num, target:aNumT})}
      {const result: Store<AN> = sample({filter: () => true, source:aNum    , clock:num, target:aT   })}
      {const result: Event<AN> = sample({filter: () => true, source:a       , clock:num, target:aNumT})}
      {const result: Store<AN> = sample({filter: () => true, source:a       , clock:num, target:aT   })}
      {const result: Event<AN> = sample({filter: () => true, source:{a:$num}, clock:num, target:aNumT})}
      {const result: Store<AN> = sample({filter: () => true, source:{a:$num}, clock:num, target:aT   })}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: Event<number>; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: Event<number>; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: Event<number>; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: Event<number>; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: Event<number>; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: Event<number>; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
  test('unit target, store clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: Store<AN> = sample({filter: () => true, source:aNum    , clock:$num, target:aT   })}
      {const result: Event<AN> = sample({filter: () => true, source:aNum    , clock:$num, target:aNumT})}
      {const result: Event<AN> = sample({filter: () => true, source:a       , clock:$num, target:aNumT})}
      {const result: Store<AN> = sample({filter: () => true, source:a       , clock:$num, target:aT   })}
      {const result: Event<AN> = sample({filter: () => true, source:{a:$num}, clock:$num, target:aNumT})}
      {const result: Store<AN> = sample({filter: () => true, source:{a:$num}, clock:$num, target:aT   })}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: Store<number>; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: Store<number>; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: Store<number>; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: Store<number>; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: Store<number>; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: Store<number>; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
  test('unit target, tuple clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: Store<AN> = sample({filter: () => true, source:aNum    , clock:[num,$num], target:aT   })}
      {const result: Event<AN> = sample({filter: () => true, source:aNum    , clock:[num,$num], target:aNumT})}
      {const result: Event<AN> = sample({filter: () => true, source:a       , clock:[num,$num], target:aNumT})}
      {const result: Store<AN> = sample({filter: () => true, source:a       , clock:[num,$num], target:aT   })}
      {const result: Event<AN> = sample({filter: () => true, source:{a:$num}, clock:[num,$num], target:aNumT})}
      {const result: Store<AN> = sample({filter: () => true, source:{a:$num}, clock:[num,$num], target:aT   })}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: (Store<number> | Event<number>)[]; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: (Store<number> | Event<number>)[]; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: (Store<number> | Event<number>)[]; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: (Store<number> | Event<number>)[]; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: (Store<number> | Event<number>)[]; target: Event<AN>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: (Store<number> | Event<number>)[]; target: Store<{ a: number; }>; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
})
describe('tuple target', () => {
  test('tuple target, none clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:aNum    , target:[aNumT,aT]})}
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:a       , target:[aNumT,aT]})}
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:{a:$num}, target:[aNumT,aT]})}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
  test('tuple target, event clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:aNum    , clock:num, target:[aNumT,aT]})}
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:a       , clock:num, target:[aNumT,aT]})}
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:{a:$num}, clock:num, target:[aNumT,aT]})}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: Event<number>; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: Event<number>; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: Event<number>; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
  test('tuple target, store clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:aNum    , clock:$num, target:[aNumT,aT]})}
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:a       , clock:$num, target:[aNumT,aT]})}
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:{a:$num}, clock:$num, target:[aNumT,aT]})}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: Store<number>; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: Store<number>; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: Store<number>; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
  test('tuple target, tuple clock (should pass)', () => {
    //prettier-ignore
    {
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:aNum    , clock:[num,$num], target:[aNumT,aT]})}
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:a       , clock:[num,$num], target:[aNumT,aT]})}
      {const result: [Event<AN>, Store<AN>] = sample({filter: () => true, source:{a:$num}, clock:[num,$num], target:[aNumT,aT]})}
    }
    expect(typecheck).toMatchInlineSnapshot(`
      "
      Argument of type '{ filter: () => boolean; source: Event<AN>; clock: (Store<number> | Event<number>)[]; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: Store<{ a: number; }>; clock: (Store<number> | Event<number>)[]; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      Argument of type '{ filter: () => boolean; source: { a: Store<number>; }; clock: (Store<number> | Event<number>)[]; target: (Event<AN> | Store<{ a: number; }>)[]; }' is not assignable to parameter of type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
        Object literal may only specify known properties, and 'filter' does not exist in type '{ error: \\"filter should be a boolean unit\\"; got: () => boolean; }'.
      "
    `)
  })
})
