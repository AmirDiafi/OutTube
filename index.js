const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
const cors = require('cors')
const ytdl = require('ytdl-core')

app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(cors())

app.get('/api/video_download', (req, res) => {
	const { URL, type, title, quality } = req.query
	console.log(URL, type, title, quality )
	if ( type === 'video'&& quality ) {
		ytdl(URL, { quality }).pipe(res)
		res.header('Content-Disposition', `attachment; filename="OutTube.mp4"`)
	} else if (type === 'audio') {
		ytdl(URL, { filter: 'audioonly' }).pipe(res)
		res.header('Content-Disposition', `attachment; filename="OutTube.mp3"`)
	}

	console.log('Sent to Client')
})

<<<<<<< HEAD
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
=======
app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
>>>>>>> f2d050b7dfe3a616b8680c43735f1a0bebd0d288
})

const port = process.env.PORT || 5050
app.listen(port, () => console.log(`App is listening on port ${port}`))
