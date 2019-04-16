window.addEventListener('DOMContentLoaded', () => {
    render(params);
    setTimers(params);
});

const render = ({lines}) => {
	const ROOT = document.querySelector('#root');
	const LINE_HEIGHT = Math.round(window.innerHeight / lines.length) + 'px'
	lines.forEach((line, lineId) => {
		const newLine = getStyledDiv(`background: ${line.background}; height: ${LINE_HEIGHT}`)
		newLine.classList.add('line')
		newLine.setAttribute('id', lineId)
		line.elements.forEach((el, elementId) => {
			const newElement = getStyledDiv(`width: ${el.width}%; background: ${el.background}; height: ${LINE_HEIGHT}`)
			newElement.setAttribute('id', getUniqueElementId(lineId, elementId))
			newLine.appendChild(newElement)
		})
		ROOT.appendChild(newLine)
	})
}

const getUniqueElementId = (lineId, elementId) => `${lineId}_${elementId}`

const mapIdsToTimeouts = (lines) => {
	return lines.map((line, lineId) => {
		const elementIds = line.elements.map((el, elementId) => getUniqueElementId(lineId, elementId))
		return {
			lineId: lineId,
			updateTime: line.updateTime,
			elementIds: elementIds,
		}
	})
}

const setTimers = ({lines}) => {
	mapIdsToTimeouts(lines).forEach(mappedIdsToTimeouts => {
		setInterval(changeColor, mappedIdsToTimeouts.updateTime, mappedIdsToTimeouts);
	})
}

const changeColor = (mappedIdsToTimeouts) => {
	const lineAndElemntsIds = mappedIdsToTimeouts.elementIds.concat(mappedIdsToTimeouts.lineId)
	lineAndElemntsIds.forEach(id => {
		switchColor(id)
	})
}

const getStyledDiv = velues => {
	const el = document.createElement('div')
	el.setAttribute('style', velues)
	return el
}

const switchColor = (id) => {
	document.getElementById(id).style.background = getRandomColor();
}

const getRandomColor = () => {
	const getRandom16Bit = () => Math.floor(Math.random()*16)
	const digits16bit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
	return '#' + new Array(3).fill('0').map(() => digits16bit[getRandom16Bit()]).join('')
}
