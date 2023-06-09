import * as esbuild from 'esbuild'

const ctx = await esbuild.context({
	entryPoints: ['app.tsx'],
	outdir: 'public',
	bundle: true
})

const { host, port } = await ctx.serve({
	servedir: 'public'
})

console.log(`Preview server running at http://${host}:${port}/`)
