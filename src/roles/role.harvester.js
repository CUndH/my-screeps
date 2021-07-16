import CreepWork from "./CreepWork";

const roleHarvester = (creep) => {
  if (creep.store[RESOURCE_ENERGY] < creep.store.getCapacity()) {
    let target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    CreepWork.harvest(creep, target);
  } else {
    let target = creep.pos.findClosestByPath(FIND_MY_SPAWNS);
    CreepWork.transfer(creep, target, RESOURCE_ENERGY);
  }
}

export default roleHarvester;