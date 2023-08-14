import React from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import * as Chakra from './src/Chakra'
import * as Chakra_Icons from './src/Chakra_Icons'
import * as HTML from './src/HTML'
import * as MUI from './src/MUI'
import * as MUI_Starter from './src/MUI_Starter'
import * as React_Router from './src/React_Router'
import * as Ant_Design from './src/Ant_Design'

const PREFABS = {
	Chakra,
	Chakra_Icons,
	HTML,
	MUI,
	MUI_Starter,
	React_Router,
	Ant_Design
}

const IGNORED = {
	MUI: ['_Backdrop'],
	MUI_Starter: ['_Dialog', '_Backdrop']
}

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App />)

function App() {
	const url = new URL(window.location.href)
	const prefabName = url.searchParams.get('prefab') || Object.keys(PREFABS)[0]
	const prefab = PREFABS[prefabName]
	if (!prefab) {
		return <h1>Not found</h1>
	}

	return (
		<>
			<nav>
				<ul>
					{Object.keys(PREFABS).map((name) => {
						return (
							<li key={name}>
								<a href={`?prefab=${name}`}>{name}</a>
							</li>
						)
					})}
				</ul>
			</nav>
			<main>
				{Object.entries(prefab).map(([name, Component]: [string, any]) => {
					return (
						<div key={name}>
							<h2>{name.replace(/_+/g, ' ').split('$')[0]}</h2>
							<div className="item">
								{IGNORED[prefabName]?.includes(name) ? (
									<p className="error">Ignoring “{name}”</p>
								) : (
									<ErrorBoundary
										fallbackRender={({ error: e }) => <p className="error">{e.message}</p>}
									>
										<Component />
									</ErrorBoundary>
								)}
							</div>
						</div>
					)
				})}
			</main>
		</>
	)
}
