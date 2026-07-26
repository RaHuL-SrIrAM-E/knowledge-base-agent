# knowledge-base-agent

A chat interface for teams to ask questions about new initiatives. The AI backend is mocked for now — responses come from a local knowledge base with suggested questions.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run preview` | Preview production build |

## Customizing content

Edit `src/data/knowledgeBase.ts` to change the topic, suggested questions, and mock answers. When you're ready to plug in a real AI backend, replace the logic in `src/mockAi.ts`.

## Project structure

```
src/
  components/     Chat UI components
  data/           Knowledge base and suggested questions
  mockAi.ts       Mock response matching (swap for real API later)
  App.tsx         Main chat layout
```
