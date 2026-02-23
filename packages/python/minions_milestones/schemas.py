"""
Minions Milestones SDK — Type Schemas
Custom MinionType schemas for Minions Milestones.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

milestone_type = MinionType(
    id="milestones-milestone",
    name="Milestone",
    slug="milestone",
    description="A major checkpoint in a project.",
    icon="🏁",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="dueAt", type="string", label="dueAt"),
        FieldDefinition(name="completedAt", type="string", label="completedAt"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="completionCriteria", type="string", label="completionCriteria"),
        FieldDefinition(name="dependsOnMilestoneIds", type="string", label="dependsOnMilestoneIds"),
    ],
)

milestone_check_type = MinionType(
    id="milestones-milestone-check",
    name="Milestone check",
    slug="milestone-check",
    description="A periodic health check on a milestone.",
    icon="✅",
    schema=[
        FieldDefinition(name="milestoneId", type="string", label="milestoneId"),
        FieldDefinition(name="checkedAt", type="string", label="checkedAt"),
        FieldDefinition(name="onTrack", type="boolean", label="onTrack"),
        FieldDefinition(name="blockers", type="string", label="blockers"),
        FieldDefinition(name="notes", type="string", label="notes"),
    ],
)

custom_types: list[MinionType] = [
    milestone_type,
    milestone_check_type,
]

