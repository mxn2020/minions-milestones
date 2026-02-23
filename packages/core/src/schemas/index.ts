/**
 * @module @minions-milestones/sdk/schemas
 * Custom MinionType schemas for Minions Milestones.
 */

import type { MinionType } from 'minions-sdk';

export const milestoneType: MinionType = {
  id: 'milestones-milestone',
  name: 'Milestone',
  slug: 'milestone',
  description: 'A major checkpoint in a project.',
  icon: '🏁',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'dueAt', type: 'string', label: 'dueAt' },
    { name: 'completedAt', type: 'string', label: 'completedAt' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'completionCriteria', type: 'string', label: 'completionCriteria' },
    { name: 'dependsOnMilestoneIds', type: 'string', label: 'dependsOnMilestoneIds' },
  ],
};

export const milestonecheckType: MinionType = {
  id: 'milestones-milestone-check',
  name: 'Milestone check',
  slug: 'milestone-check',
  description: 'A periodic health check on a milestone.',
  icon: '✅',
  schema: [
    { name: 'milestoneId', type: 'string', label: 'milestoneId' },
    { name: 'checkedAt', type: 'string', label: 'checkedAt' },
    { name: 'onTrack', type: 'boolean', label: 'onTrack' },
    { name: 'blockers', type: 'string', label: 'blockers' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

export const customTypes: MinionType[] = [
  milestoneType,
  milestonecheckType,
];

