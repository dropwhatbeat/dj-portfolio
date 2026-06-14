import type { Project } from './types'

export const projects: Project[] = [
  {
    name: 'Next Ketchup',
    status: 'live',
    tagline: 'Plan group hangouts without the group chat chaos.',
    description:
      'Coordinating a group dinner takes more messages than the dinner itself. Next Ketchup removes that friction — propose a hangout, everyone marks availability, a time gets picked. Conceived, designed, and shipped independently.',
    tags: ['Product design', '0→1', 'Lovable'],
    url: 'https://nextketchup.lovable.app',
    posthogKey: 'nextketchup.lovable.app',
  },
  {
    name: 'Bullshit Factory',
    status: 'live',
    tagline: 'A multiplayer party game. Where lies are manufactured.',
    description:
      'Players submit fake answers, vote on who is bluffing, and earn points for convincing lies. Create a room or join with a code. No installation required.',
    tags: ['Multiplayer', 'Real-time', 'Game design'],
    url: 'https://truthsayer.vercel.app',
    posthogKey: 'truthsayer.vercel.app',
  },
  {
    name: 'Vibe Meter',
    status: 'live',
    tagline: 'A live wedding party game to test how well you know the couple.',
    description:
      "Built for a real wedding — guests join a live trivia game about the couple, designed to get a room competing and laughing. Originally shipped for DJ & HK's wedding under Stirring Committee.",
    tags: ['Party game', 'Live events', 'TypeScript'],
    url: 'https://vibemeter.stirringcommittee.com/landing',
  },
]
