// XP Actions
export const XP_ACTIONS = {
  VISIT_SKILLS: 10,
  OPEN_PROJECT: 20,
  TALK_TO_AI: 5,
  VISIT_ZONE: 10,
  UNLOCK_ACHIEVEMENT: 50
}

// Level thresholds
export const LEVELS = [
  { level: 1, name: 'Visitor', xp: 0 },
  { level: 2, name: 'Explorer', xp: 100 },
  { level: 3, name: 'Developer Insider', xp: 250 },
  { level: 4, name: 'Code Master', xp: 500 }
]

// Achievements
export const ACHIEVEMENTS = {
  'first-visit': {
    id: 'first-visit',
    name: 'First Visit',
    description: 'Welcome to the developer world!',
    icon: '🎮',
    condition: 'Enter the game map'
  },
  'project-explorer': {
    id: 'project-explorer',
    name: 'Project Explorer',
    description: 'Explored your first project',
    icon: '🚀',
    condition: 'Open first project'
  },
  'ai-conversationalist': {
    id: 'ai-conversationalist',
    name: 'AI Conversationalist',
    description: 'Had your first AI conversation',
    icon: '🤖',
    condition: 'Ask AI first question'
  },
  'portfolio-master': {
    id: 'portfolio-master',
    name: 'Portfolio Master',
    description: 'Visited all zones in the portfolio',
    icon: '👑',
    condition: 'Visit all zones'
  }
}

export const getAchievementById = (id) => ACHIEVEMENTS[id]

export const calculateLevel = (xp) => {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xp) {
      return LEVELS[i]
    }
  }
  return LEVELS[0]
}
