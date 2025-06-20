import { marked } from 'marked'
import { setChatMessageFormatter } from '@padcom/chat-ui'

const renderer = new marked.Renderer()

// Specialized link renderer that will create links that open up in new window/tab
renderer.link = function({ href, title, text }) {
  return `<a target="_blank" href="${href}" title="${title}">${text}</a>`
}

setChatMessageFormatter(source => marked(source || '', { renderer }))
