function dfs(dep, p) {
	if (p.childElementCount <= 0) return
	for (let i = 0; i < p.childElementCount; i++) {
		let child = p.children[i]
		console.log(dep+1, child)
		dfs(dep+1, child)	
	}
}

dfs(0, document)