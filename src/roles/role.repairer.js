import CreepWork from "../CreepWork";

const roleRepairer = (creep) => {
  const walls = creep.room.find(FIND_STRUCTURES, {
    filter: { structureType: STRUCTURE_WALL },
  });

  let target = null;

  for (let wall of walls) {
    if ((wall.hits / wall.hitsMax) < 0.3) {
      target = wall;
      break;
    }
  }

  if (creep.memory.working && target) {
    creep.repair(target);
  } else if (creep.memory.working && !target) {
    CreepWork.upgrade(creep, creep.room.controller);
  } else {
    if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
      let newTarget = creep.pos.findClosestByPath(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_EXTENSION || s.structureType == STRUCTURE_SPAWN
      })
      CreepWork.withDraw(creep, newTarget, RESOURCE_ENERGY);
    } else {
      creep.working = true;
    }
  }
}

export default roleRepairer;