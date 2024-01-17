import React from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import * as Chakra from './src/Chakra'
import * as Chakra_Icons from './src/Chakra_Icons'
import * as HTML from './src/HTML'
import * as MUI from './src/MUI'
import * as React_Router from './src/React_Router'
import * as Ant_Design from './src/Ant_Design'
import * as Tailwind from './src/Tailwind'
import * as Radix from './src/Radix_UI'

const PREFABS = {
	Chakra,
	Chakra_Icons,
	HTML,
	MUI,
	React_Router,
	Ant_Design,
	Tailwind,
	Radix
}

const META = {
	MUI: {
		_Backdrop: {
			ignore: true
		},
		_Typography_heading: {
			width: 'full'
		}
	},
	Tailwind: {
		Accordion_2: {
			width: 'full'
		},
		Card: {
			width: 'full'
		},
		Feature_Card: {
			width: 'full'
		},
		Header: {
			width: 'full'
		},
		Hero: {
			width: 'full'
		},
		Footer: {
			width: 'full'
		},
		Floating_Header: {
			ignore: true
		}
	}
}

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App />)

function App() {
	const url = new URL(window.location.href)
	const collectionName = url.searchParams.get('prefab') || Object.keys(PREFABS)[0]
	const collection = PREFABS[collectionName]
	if (!collection) {
		return <h1>Not found</h1>
	}

	return (
		<>
			<nav>
				<ul>
					{Object.keys(PREFABS).map((name) => {
						return (
							<li key={name}>
								<a
									className={collectionName === name ? 'selected' : undefined}
									href={`?prefab=${name}`}
								>
									{name.replace(/_/g, ' ')}
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
			<main>
				{Object.entries(collection).map(([name, Component]: [string, any]) => {
					const meta = META[collectionName]?.[name] || {}
					if (meta.ignore) {
						console.log(`Ignoring “${name}”`)
						return null
					}
					return (
						<div key={name} className={meta.width === 'full' ? 'width-full' : undefined}>
							<h2>{name.replace(/_+/g, ' ').trim().split('$')[0]}</h2>
							<div className="item">
								<ErrorBoundary
									fallbackRender={({ error: e }) => <p className="error">{e.message}</p>}
								>
									<Component />
								</ErrorBoundary>
							</div>
						</div>
					)
				})}
			</main>
		</>
	)
}
