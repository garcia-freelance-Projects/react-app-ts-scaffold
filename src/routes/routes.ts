import React, {lazy} from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element

interface Route {
    to: string
    path: string
    Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent
    name: string
}

const LazyLayout = lazy(() => import (/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]
