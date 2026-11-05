const RECIPES = {
  "speed-module": {
    "name": "Speed module",
    "product": "speed-module",
    "out": 1.0,
    "time": 15.0,
    "inputs": {
      "advanced-circuit": 5.0,
      "electronic-circuit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Speed module"
  },
  "speed-module-2": {
    "name": "Speed module 2",
    "product": "speed-module-2",
    "out": 1.0,
    "time": 30.0,
    "inputs": {
      "speed-module": 4.0,
      "advanced-circuit": 5.0,
      "processing-unit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Speed module 2"
  },
  "speed-module-3": {
    "name": "Speed module 3",
    "product": "speed-module-3",
    "out": 1.0,
    "time": 60.0,
    "inputs": {
      "speed-module-2": 4.0,
      "advanced-circuit": 5.0,
      "processing-unit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Speed module 3"
  },
  "productivity-module": {
    "name": "Productivity module",
    "product": "productivity-module",
    "out": 1.0,
    "time": 15.0,
    "inputs": {
      "advanced-circuit": 5.0,
      "electronic-circuit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Productivity module"
  },
  "productivity-module-2": {
    "name": "Productivity module 2",
    "product": "productivity-module-2",
    "out": 1.0,
    "time": 30.0,
    "inputs": {
      "productivity-module": 4.0,
      "advanced-circuit": 5.0,
      "processing-unit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Productivity module 2"
  },
  "productivity-module-3": {
    "name": "Productivity module 3",
    "product": "productivity-module-3",
    "out": 1.0,
    "time": 60.0,
    "inputs": {
      "productivity-module-2": 4.0,
      "advanced-circuit": 5.0,
      "processing-unit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Productivity module 3"
  },
  "efficiency-module": {
    "name": "Efficiency module",
    "product": "efficiency-module",
    "out": 1.0,
    "time": 15.0,
    "inputs": {
      "advanced-circuit": 5.0,
      "electronic-circuit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Efficiency module"
  },
  "efficiency-module-2": {
    "name": "Efficiency module 2",
    "product": "efficiency-module-2",
    "out": 1.0,
    "time": 30.0,
    "inputs": {
      "efficiency-module": 4.0,
      "advanced-circuit": 5.0,
      "processing-unit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Efficiency module 2"
  },
  "efficiency-module-3": {
    "name": "Efficiency module 3",
    "product": "efficiency-module-3",
    "out": 1.0,
    "time": 60.0,
    "inputs": {
      "efficiency-module-2": 4.0,
      "advanced-circuit": 5.0,
      "processing-unit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Efficiency module 3"
  },
  "bulk-inserter": {
    "name": "Bulk inserter",
    "product": "bulk-inserter",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-gear-wheel": 15.0,
      "electronic-circuit": 15.0,
      "advanced-circuit": 1.0,
      "fast-inserter": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Bulk inserter"
  },
  "basic-oil-processing": {
    "name": "Basic oil processing",
    "product": "petroleum-gas",
    "out": 45.0,
    "time": 5.0,
    "inputs": {
      "crude-oil": 100.0
    },
    "fluids": [
      "crude-oil"
    ],
    "fluidOut": true,
    "machine": "refinery",
    "tech": "Oil processing"
  },
  "heavy-oil-cracking": {
    "name": "Heavy oil cracking",
    "product": "light-oil",
    "out": 30.0,
    "time": 2.0,
    "inputs": {
      "water": 30.0,
      "heavy-oil": 40.0
    },
    "fluids": [
      "water",
      "heavy-oil"
    ],
    "fluidOut": true,
    "machine": "chemical",
    "tech": "Advanced oil processing"
  },
  "light-oil-cracking": {
    "name": "Light oil cracking",
    "product": "petroleum-gas",
    "out": 20.0,
    "time": 2.0,
    "inputs": {
      "water": 30.0,
      "light-oil": 30.0
    },
    "fluids": [
      "water",
      "light-oil"
    ],
    "fluidOut": true,
    "machine": "chemical",
    "tech": "Advanced oil processing"
  },
  "sulfuric-acid": {
    "name": "Sulfuric acid",
    "product": "sulfuric-acid",
    "out": 50.0,
    "time": 1.0,
    "inputs": {
      "sulfur": 5.0,
      "iron-plate": 1.0,
      "water": 100.0
    },
    "fluids": [
      "water"
    ],
    "fluidOut": true,
    "machine": "chemical",
    "tech": "Sulfur processing"
  },
  "plastic-bar": {
    "name": "Plastic bar",
    "product": "plastic-bar",
    "out": 2.0,
    "time": 1.0,
    "inputs": {
      "petroleum-gas": 20.0,
      "coal": 1.0
    },
    "fluids": [
      "petroleum-gas"
    ],
    "fluidOut": false,
    "machine": "chemical",
    "tech": "Plastics"
  },
  "solid-fuel-from-light-oil": {
    "name": "Solid fuel from light oil",
    "product": "solid-fuel",
    "out": 1.0,
    "time": 1.0,
    "inputs": {
      "light-oil": 10.0
    },
    "fluids": [
      "light-oil"
    ],
    "fluidOut": false,
    "machine": "chemical",
    "tech": "Advanced oil processing"
  },
  "solid-fuel-from-petroleum-gas": {
    "name": "Solid fuel from petroleum gas",
    "product": "solid-fuel",
    "out": 1.0,
    "time": 1.0,
    "inputs": {
      "petroleum-gas": 20.0
    },
    "fluids": [
      "petroleum-gas"
    ],
    "fluidOut": false,
    "machine": "chemical",
    "tech": "Oil processing"
  },
  "solid-fuel-from-heavy-oil": {
    "name": "Solid fuel from heavy oil",
    "product": "solid-fuel",
    "out": 1.0,
    "time": 1.0,
    "inputs": {
      "heavy-oil": 20.0
    },
    "fluids": [
      "heavy-oil"
    ],
    "fluidOut": false,
    "machine": "chemical",
    "tech": "Advanced oil processing"
  },
  "sulfur": {
    "name": "Sulfur",
    "product": "sulfur",
    "out": 2.0,
    "time": 1.0,
    "inputs": {
      "water": 30.0,
      "petroleum-gas": 30.0
    },
    "fluids": [
      "water",
      "petroleum-gas"
    ],
    "fluidOut": false,
    "machine": "chemical",
    "tech": "Sulfur processing"
  },
  "lubricant": {
    "name": "Lubricant",
    "product": "lubricant",
    "out": 10.0,
    "time": 1.0,
    "inputs": {
      "heavy-oil": 10.0
    },
    "fluids": [
      "heavy-oil"
    ],
    "fluidOut": true,
    "machine": "chemical",
    "tech": "Lubricant"
  },
  "barrel": {
    "name": "Barrel",
    "product": "barrel",
    "out": 1.0,
    "time": 1.0,
    "inputs": {
      "steel-plate": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Fluid handling"
  },
  "night-vision-equipment": {
    "name": "Night vision equipment",
    "product": "night-vision-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "advanced-circuit": 5.0,
      "steel-plate": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Night vision equipment"
  },
  "belt-immunity-equipment": {
    "name": "Belt immunity equipment",
    "product": "belt-immunity-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "advanced-circuit": 5.0,
      "steel-plate": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Belt immunity equipment"
  },
  "energy-shield-equipment": {
    "name": "Energy shield equipment",
    "product": "energy-shield-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "advanced-circuit": 5.0,
      "steel-plate": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Energy shield equipment"
  },
  "energy-shield-mk2-equipment": {
    "name": "Energy shield mk2 equipment",
    "product": "energy-shield-mk2-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "energy-shield-equipment": 10.0,
      "processing-unit": 5.0,
      "low-density-structure": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Energy shield mk2 equipment"
  },
  "battery-equipment": {
    "name": "Battery equipment",
    "product": "battery-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "battery": 5.0,
      "steel-plate": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Battery equipment"
  },
  "battery-mk2-equipment": {
    "name": "Battery mk2 equipment",
    "product": "battery-mk2-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "battery-equipment": 10.0,
      "processing-unit": 15.0,
      "low-density-structure": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Battery mk2 equipment"
  },
  "solar-panel-equipment": {
    "name": "Solar panel equipment",
    "product": "solar-panel-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "solar-panel": 1.0,
      "advanced-circuit": 2.0,
      "steel-plate": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Solar panel equipment"
  },
  "fission-reactor-equipment": {
    "name": "Fission reactor equipment",
    "product": "fission-reactor-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "processing-unit": 200.0,
      "low-density-structure": 50.0,
      "uranium-fuel-cell": 4.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Fission reactor equipment"
  },
  "personal-laser-defense-equipment": {
    "name": "Personal laser defense equipment",
    "product": "personal-laser-defense-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "processing-unit": 20.0,
      "low-density-structure": 5.0,
      "laser-turret": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Personal laser defense equipment"
  },
  "discharge-defense-equipment": {
    "name": "Discharge defense equipment",
    "product": "discharge-defense-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "processing-unit": 5.0,
      "steel-plate": 20.0,
      "laser-turret": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Discharge defense equipment"
  },
  "exoskeleton-equipment": {
    "name": "Exoskeleton equipment",
    "product": "exoskeleton-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "processing-unit": 10.0,
      "electric-engine-unit": 30.0,
      "steel-plate": 20.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Exoskeleton equipment"
  },
  "personal-roboport-equipment": {
    "name": "Personal roboport equipment",
    "product": "personal-roboport-equipment",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "advanced-circuit": 10.0,
      "iron-gear-wheel": 40.0,
      "steel-plate": 20.0,
      "battery": 45.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Personal roboport equipment"
  },
  "personal-roboport-mk2-equipment": {
    "name": "Personal roboport mk2 equipment",
    "product": "personal-roboport-mk2-equipment",
    "out": 1.0,
    "time": 20.0,
    "inputs": {
      "personal-roboport-equipment": 5.0,
      "processing-unit": 100.0,
      "low-density-structure": 20.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Personal roboport mk2 equipment"
  },
  "laser-turret": {
    "name": "Laser turret",
    "product": "laser-turret",
    "out": 1.0,
    "time": 20.0,
    "inputs": {
      "steel-plate": 20.0,
      "electronic-circuit": 20.0,
      "battery": 12.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Laser turret"
  },
  "flamethrower-turret": {
    "name": "Flamethrower turret",
    "product": "flamethrower-turret",
    "out": 1.0,
    "time": 20.0,
    "inputs": {
      "steel-plate": 30.0,
      "iron-gear-wheel": 15.0,
      "pipe": 10.0,
      "engine-unit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Flamethrower"
  },
  "artillery-turret": {
    "name": "Artillery turret",
    "product": "artillery-turret",
    "out": 1.0,
    "time": 40.0,
    "inputs": {
      "steel-plate": 60.0,
      "concrete": 60.0,
      "iron-gear-wheel": 40.0,
      "advanced-circuit": 20.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Artillery"
  },
  "gun-turret": {
    "name": "Gun turret",
    "product": "gun-turret",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "iron-gear-wheel": 10.0,
      "copper-plate": 10.0,
      "iron-plate": 20.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Gun turret"
  },
  "wooden-chest": {
    "name": "Wooden chest",
    "product": "wooden-chest",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "wood": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": null
  },
  "display-panel": {
    "name": "Display panel",
    "product": "display-panel",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-plate": 1.0,
      "electronic-circuit": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Circuit network"
  },
  "iron-stick": {
    "name": "Iron stick",
    "product": "iron-stick",
    "out": 2.0,
    "time": 0.5,
    "inputs": {
      "iron-plate": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Circuit network"
  },
  "stone-furnace": {
    "name": "Stone furnace",
    "product": "stone-furnace",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "stone": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": null
  },
  "boiler": {
    "name": "Boiler",
    "product": "boiler",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "stone-furnace": 1.0,
      "pipe": 4.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Steam power"
  },
  "steam-engine": {
    "name": "Steam engine",
    "product": "steam-engine",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-gear-wheel": 8.0,
      "pipe": 5.0,
      "iron-plate": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Steam power"
  },
  "iron-gear-wheel": {
    "name": "Iron gear wheel",
    "product": "iron-gear-wheel",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-plate": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": null
  },
  "electronic-circuit": {
    "name": "Electronic circuit",
    "product": "electronic-circuit",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-plate": 1.0,
      "copper-cable": 3.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Electronics"
  },
  "transport-belt": {
    "name": "Transport belt",
    "product": "transport-belt",
    "out": 2.0,
    "time": 0.5,
    "inputs": {
      "iron-plate": 1.0,
      "iron-gear-wheel": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": null
  },
  "electric-mining-drill": {
    "name": "Electric mining drill",
    "product": "electric-mining-drill",
    "out": 1.0,
    "time": 2.0,
    "inputs": {
      "electronic-circuit": 3.0,
      "iron-gear-wheel": 5.0,
      "iron-plate": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Electric mining drill"
  },
  "burner-mining-drill": {
    "name": "Burner mining drill",
    "product": "burner-mining-drill",
    "out": 1.0,
    "time": 2.0,
    "inputs": {
      "iron-gear-wheel": 3.0,
      "stone-furnace": 1.0,
      "iron-plate": 3.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": null
  },
  "inserter": {
    "name": "Inserter",
    "product": "inserter",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "electronic-circuit": 1.0,
      "iron-gear-wheel": 1.0,
      "iron-plate": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Electronics"
  },
  "fast-inserter": {
    "name": "Fast inserter",
    "product": "fast-inserter",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "electronic-circuit": 2.0,
      "iron-plate": 2.0,
      "inserter": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Fast inserter"
  },
  "long-handed-inserter": {
    "name": "Long handed inserter",
    "product": "long-handed-inserter",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-gear-wheel": 1.0,
      "iron-plate": 1.0,
      "inserter": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Automation"
  },
  "burner-inserter": {
    "name": "Burner inserter",
    "product": "burner-inserter",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-plate": 1.0,
      "iron-gear-wheel": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": null
  },
  "pipe": {
    "name": "Pipe",
    "product": "pipe",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-plate": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Steam power"
  },
  "offshore-pump": {
    "name": "Offshore pump",
    "product": "offshore-pump",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "pipe": 3.0,
      "iron-gear-wheel": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Steam power"
  },
  "copper-cable": {
    "name": "Copper cable",
    "product": "copper-cable",
    "out": 2.0,
    "time": 0.5,
    "inputs": {
      "copper-plate": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Electronics"
  },
  "small-electric-pole": {
    "name": "Small electric pole",
    "product": "small-electric-pole",
    "out": 2.0,
    "time": 0.5,
    "inputs": {
      "wood": 1.0,
      "copper-cable": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Electronics"
  },
  "pistol": {
    "name": "Pistol",
    "product": "pistol",
    "out": 1.0,
    "time": 5.0,
    "inputs": {
      "copper-plate": 5.0,
      "iron-plate": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": null
  },
  "submachine-gun": {
    "name": "Submachine gun",
    "product": "submachine-gun",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "iron-gear-wheel": 10.0,
      "copper-plate": 5.0,
      "iron-plate": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Military"
  },
  "firearm-magazine": {
    "name": "Firearm magazine",
    "product": "firearm-magazine",
    "out": 1.0,
    "time": 1.0,
    "inputs": {
      "iron-plate": 4.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": null
  },
  "light-armor": {
    "name": "Light armor",
    "product": "light-armor",
    "out": 1.0,
    "time": 3.0,
    "inputs": {
      "iron-plate": 40.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": null
  },
  "radar": {
    "name": "Radar",
    "product": "radar",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "electronic-circuit": 5.0,
      "iron-gear-wheel": 5.0,
      "iron-plate": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Radar"
  },
  "small-lamp": {
    "name": "Small lamp",
    "product": "small-lamp",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "electronic-circuit": 1.0,
      "copper-cable": 3.0,
      "iron-plate": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Lamp"
  },
  "pipe-to-ground": {
    "name": "Pipe to ground",
    "product": "pipe-to-ground",
    "out": 2.0,
    "time": 0.5,
    "inputs": {
      "pipe": 10.0,
      "iron-plate": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Steam power"
  },
  "assembling-machine-1": {
    "name": "Assembling machine 1",
    "product": "assembling-machine-1",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "electronic-circuit": 3.0,
      "iron-gear-wheel": 5.0,
      "iron-plate": 9.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Automation"
  },
  "repair-pack": {
    "name": "Repair pack",
    "product": "repair-pack",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "electronic-circuit": 2.0,
      "iron-gear-wheel": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Repair pack"
  },
  "automation-science-pack": {
    "name": "Automation science pack",
    "product": "automation-science-pack",
    "out": 1.0,
    "time": 5.0,
    "inputs": {
      "copper-plate": 1.0,
      "iron-gear-wheel": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Automation science pack"
  },
  "logistic-science-pack": {
    "name": "Logistic science pack",
    "product": "logistic-science-pack",
    "out": 1.0,
    "time": 6.0,
    "inputs": {
      "inserter": 1.0,
      "transport-belt": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistic science pack"
  },
  "lab": {
    "name": "Lab",
    "product": "lab",
    "out": 1.0,
    "time": 2.0,
    "inputs": {
      "electronic-circuit": 10.0,
      "iron-gear-wheel": 10.0,
      "transport-belt": 4.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Electronics"
  },
  "stone-wall": {
    "name": "Stone wall",
    "product": "stone-wall",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "stone-brick": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Stone wall"
  },
  "assembling-machine-2": {
    "name": "Assembling machine 2",
    "product": "assembling-machine-2",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "steel-plate": 2.0,
      "electronic-circuit": 3.0,
      "iron-gear-wheel": 5.0,
      "assembling-machine-1": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Automation 2"
  },
  "splitter": {
    "name": "Splitter",
    "product": "splitter",
    "out": 1.0,
    "time": 1.0,
    "inputs": {
      "electronic-circuit": 5.0,
      "iron-plate": 5.0,
      "transport-belt": 4.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistics"
  },
  "underground-belt": {
    "name": "Underground belt",
    "product": "underground-belt",
    "out": 2.0,
    "time": 1.0,
    "inputs": {
      "iron-plate": 10.0,
      "transport-belt": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistics"
  },
  "car": {
    "name": "Car",
    "product": "car",
    "out": 1.0,
    "time": 2.0,
    "inputs": {
      "engine-unit": 8.0,
      "iron-plate": 20.0,
      "steel-plate": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Automobilism"
  },
  "engine-unit": {
    "name": "Engine unit",
    "product": "engine-unit",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "steel-plate": 1.0,
      "iron-gear-wheel": 1.0,
      "pipe": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Engine"
  },
  "iron-chest": {
    "name": "Iron chest",
    "product": "iron-chest",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-plate": 8.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": null
  },
  "big-electric-pole": {
    "name": "Big electric pole",
    "product": "big-electric-pole",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-stick": 8.0,
      "steel-plate": 5.0,
      "copper-cable": 4.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Electric energy distribution 1"
  },
  "medium-electric-pole": {
    "name": "Medium electric pole",
    "product": "medium-electric-pole",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-stick": 4.0,
      "steel-plate": 2.0,
      "copper-cable": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Electric energy distribution 1"
  },
  "shotgun": {
    "name": "Shotgun",
    "product": "shotgun",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "iron-plate": 15.0,
      "iron-gear-wheel": 5.0,
      "copper-plate": 10.0,
      "wood": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Military"
  },
  "shotgun-shell": {
    "name": "Shotgun shell",
    "product": "shotgun-shell",
    "out": 1.0,
    "time": 3.0,
    "inputs": {
      "copper-plate": 2.0,
      "iron-plate": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Military"
  },
  "piercing-rounds-magazine": {
    "name": "Piercing rounds magazine",
    "product": "piercing-rounds-magazine",
    "out": 2.0,
    "time": 6.0,
    "inputs": {
      "firearm-magazine": 2.0,
      "steel-plate": 1.0,
      "copper-plate": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Military 2"
  },
  "grenade": {
    "name": "Grenade",
    "product": "grenade",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "iron-plate": 5.0,
      "coal": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Military 2"
  },
  "steel-furnace": {
    "name": "Steel furnace",
    "product": "steel-furnace",
    "out": 1.0,
    "time": 3.0,
    "inputs": {
      "steel-plate": 6.0,
      "stone-brick": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Advanced material processing"
  },
  "gate": {
    "name": "Gate",
    "product": "gate",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "stone-wall": 1.0,
      "steel-plate": 2.0,
      "electronic-circuit": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Gate"
  },
  "heavy-armor": {
    "name": "Heavy armor",
    "product": "heavy-armor",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "copper-plate": 100.0,
      "steel-plate": 50.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Heavy armor"
  },
  "steel-chest": {
    "name": "Steel chest",
    "product": "steel-chest",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "steel-plate": 8.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Steel processing"
  },
  "fast-underground-belt": {
    "name": "Fast underground belt",
    "product": "fast-underground-belt",
    "out": 2.0,
    "time": 2.0,
    "inputs": {
      "iron-gear-wheel": 40.0,
      "underground-belt": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistics 2"
  },
  "fast-splitter": {
    "name": "Fast splitter",
    "product": "fast-splitter",
    "out": 1.0,
    "time": 2.0,
    "inputs": {
      "splitter": 1.0,
      "iron-gear-wheel": 10.0,
      "electronic-circuit": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistics 2"
  },
  "concrete": {
    "name": "Concrete",
    "product": "concrete",
    "out": 10.0,
    "time": 10.0,
    "inputs": {
      "stone-brick": 5.0,
      "iron-ore": 1.0,
      "water": 100.0
    },
    "fluids": [
      "water"
    ],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Concrete"
  },
  "hazard-concrete": {
    "name": "Hazard concrete",
    "product": "hazard-concrete",
    "out": 10.0,
    "time": 0.25,
    "inputs": {
      "concrete": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Concrete"
  },
  "refined-concrete": {
    "name": "Refined concrete",
    "product": "refined-concrete",
    "out": 10.0,
    "time": 15.0,
    "inputs": {
      "concrete": 20.0,
      "iron-stick": 8.0,
      "steel-plate": 1.0,
      "water": 100.0
    },
    "fluids": [
      "water"
    ],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Concrete"
  },
  "refined-hazard-concrete": {
    "name": "Refined hazard concrete",
    "product": "refined-hazard-concrete",
    "out": 10.0,
    "time": 0.25,
    "inputs": {
      "refined-concrete": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Concrete"
  },
  "landfill": {
    "name": "Landfill",
    "product": "landfill",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "stone": 50.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Landfill"
  },
  "fast-transport-belt": {
    "name": "Fast transport belt",
    "product": "fast-transport-belt",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-gear-wheel": 5.0,
      "transport-belt": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistics 2"
  },
  "solar-panel": {
    "name": "Solar panel",
    "product": "solar-panel",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "steel-plate": 5.0,
      "electronic-circuit": 15.0,
      "copper-plate": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Solar energy"
  },
  "rail": {
    "name": "Rail",
    "product": "rail",
    "out": 2.0,
    "time": 0.5,
    "inputs": {
      "stone": 1.0,
      "iron-stick": 1.0,
      "steel-plate": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Railway"
  },
  "locomotive": {
    "name": "Locomotive",
    "product": "locomotive",
    "out": 1.0,
    "time": 4.0,
    "inputs": {
      "engine-unit": 20.0,
      "electronic-circuit": 10.0,
      "steel-plate": 30.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Railway"
  },
  "cargo-wagon": {
    "name": "Cargo wagon",
    "product": "cargo-wagon",
    "out": 1.0,
    "time": 1.0,
    "inputs": {
      "iron-gear-wheel": 10.0,
      "iron-plate": 20.0,
      "steel-plate": 20.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Railway"
  },
  "rail-signal": {
    "name": "Rail signal",
    "product": "rail-signal",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "electronic-circuit": 1.0,
      "iron-plate": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Automated rail transportation"
  },
  "rail-chain-signal": {
    "name": "Rail chain signal",
    "product": "rail-chain-signal",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "electronic-circuit": 1.0,
      "iron-plate": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Automated rail transportation"
  },
  "train-stop": {
    "name": "Train stop",
    "product": "train-stop",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "electronic-circuit": 5.0,
      "iron-plate": 6.0,
      "iron-stick": 6.0,
      "steel-plate": 3.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Automated rail transportation"
  },
  "copper-plate": {
    "name": "Copper plate",
    "product": "copper-plate",
    "out": 1.0,
    "time": 3.2,
    "inputs": {
      "copper-ore": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "furnace",
    "tech": null
  },
  "iron-plate": {
    "name": "Iron plate",
    "product": "iron-plate",
    "out": 1.0,
    "time": 3.2,
    "inputs": {
      "iron-ore": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "furnace",
    "tech": null
  },
  "stone-brick": {
    "name": "Stone brick",
    "product": "stone-brick",
    "out": 1.0,
    "time": 3.2,
    "inputs": {
      "stone": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "furnace",
    "tech": null
  },
  "steel-plate": {
    "name": "Steel plate",
    "product": "steel-plate",
    "out": 1.0,
    "time": 16.0,
    "inputs": {
      "iron-plate": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "furnace",
    "tech": "Steel processing"
  },
  "arithmetic-combinator": {
    "name": "Arithmetic combinator",
    "product": "arithmetic-combinator",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "copper-cable": 5.0,
      "electronic-circuit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Circuit network"
  },
  "decider-combinator": {
    "name": "Decider combinator",
    "product": "decider-combinator",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "copper-cable": 5.0,
      "electronic-circuit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Circuit network"
  },
  "constant-combinator": {
    "name": "Constant combinator",
    "product": "constant-combinator",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "copper-cable": 5.0,
      "electronic-circuit": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Circuit network"
  },
  "selector-combinator": {
    "name": "Selector combinator",
    "product": "selector-combinator",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "advanced-circuit": 2.0,
      "decider-combinator": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Advanced combinators"
  },
  "power-switch": {
    "name": "Power switch",
    "product": "power-switch",
    "out": 1.0,
    "time": 2.0,
    "inputs": {
      "iron-plate": 5.0,
      "copper-cable": 5.0,
      "electronic-circuit": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Circuit network"
  },
  "programmable-speaker": {
    "name": "Programmable speaker",
    "product": "programmable-speaker",
    "out": 1.0,
    "time": 2.0,
    "inputs": {
      "iron-plate": 3.0,
      "iron-stick": 4.0,
      "copper-cable": 5.0,
      "electronic-circuit": 4.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Circuit network"
  },
  "poison-capsule": {
    "name": "Poison capsule",
    "product": "poison-capsule",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "steel-plate": 3.0,
      "electronic-circuit": 3.0,
      "coal": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Military 3"
  },
  "slowdown-capsule": {
    "name": "Slowdown capsule",
    "product": "slowdown-capsule",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "steel-plate": 2.0,
      "electronic-circuit": 2.0,
      "coal": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Military 3"
  },
  "cluster-grenade": {
    "name": "Cluster grenade",
    "product": "cluster-grenade",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "grenade": 7.0,
      "explosives": 5.0,
      "steel-plate": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Military 4"
  },
  "defender-capsule": {
    "name": "Defender capsule",
    "product": "defender-capsule",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "piercing-rounds-magazine": 3.0,
      "electronic-circuit": 3.0,
      "iron-gear-wheel": 3.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Defender"
  },
  "distractor-capsule": {
    "name": "Distractor capsule",
    "product": "distractor-capsule",
    "out": 1.0,
    "time": 15.0,
    "inputs": {
      "defender-capsule": 4.0,
      "advanced-circuit": 3.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Distractor"
  },
  "destroyer-capsule": {
    "name": "Destroyer capsule",
    "product": "destroyer-capsule",
    "out": 1.0,
    "time": 15.0,
    "inputs": {
      "distractor-capsule": 4.0,
      "speed-module": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Destroyer"
  },
  "cliff-explosives": {
    "name": "Cliff explosives",
    "product": "cliff-explosives",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "explosives": 10.0,
      "grenade": 1.0,
      "barrel": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Cliff explosives"
  },
  "uranium-rounds-magazine": {
    "name": "Uranium rounds magazine",
    "product": "uranium-rounds-magazine",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "piercing-rounds-magazine": 1.0,
      "uranium-238": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Uranium ammo"
  },
  "rocket": {
    "name": "Rocket",
    "product": "rocket",
    "out": 1.0,
    "time": 4.0,
    "inputs": {
      "explosives": 1.0,
      "iron-plate": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Rocketry"
  },
  "explosive-rocket": {
    "name": "Explosive rocket",
    "product": "explosive-rocket",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "rocket": 1.0,
      "explosives": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Explosive rocketry"
  },
  "atomic-bomb": {
    "name": "Atomic bomb",
    "product": "atomic-bomb",
    "out": 1.0,
    "time": 50.0,
    "inputs": {
      "processing-unit": 10.0,
      "explosives": 10.0,
      "uranium-235": 30.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Atomic bomb"
  },
  "piercing-shotgun-shell": {
    "name": "Piercing shotgun shell",
    "product": "piercing-shotgun-shell",
    "out": 2.0,
    "time": 8.0,
    "inputs": {
      "shotgun-shell": 2.0,
      "copper-plate": 2.0,
      "steel-plate": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Military 3"
  },
  "cannon-shell": {
    "name": "Cannon shell",
    "product": "cannon-shell",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "steel-plate": 2.0,
      "plastic-bar": 2.0,
      "explosives": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Tank"
  },
  "explosive-cannon-shell": {
    "name": "Explosive cannon shell",
    "product": "explosive-cannon-shell",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "steel-plate": 2.0,
      "plastic-bar": 2.0,
      "explosives": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Tank"
  },
  "uranium-cannon-shell": {
    "name": "Uranium cannon shell",
    "product": "uranium-cannon-shell",
    "out": 1.0,
    "time": 12.0,
    "inputs": {
      "cannon-shell": 1.0,
      "uranium-238": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Uranium ammo"
  },
  "explosive-uranium-cannon-shell": {
    "name": "Explosive uranium cannon shell",
    "product": "explosive-uranium-cannon-shell",
    "out": 1.0,
    "time": 12.0,
    "inputs": {
      "explosive-cannon-shell": 1.0,
      "uranium-238": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Uranium ammo"
  },
  "artillery-shell": {
    "name": "Artillery shell",
    "product": "artillery-shell",
    "out": 1.0,
    "time": 15.0,
    "inputs": {
      "explosive-cannon-shell": 4.0,
      "radar": 1.0,
      "explosives": 8.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Artillery"
  },
  "flamethrower-ammo": {
    "name": "Flamethrower ammo",
    "product": "flamethrower-ammo",
    "out": 1.0,
    "time": 6.0,
    "inputs": {
      "steel-plate": 5.0,
      "crude-oil": 100.0
    },
    "fluids": [
      "crude-oil"
    ],
    "fluidOut": false,
    "machine": "chemical",
    "tech": "Flamethrower"
  },
  "express-transport-belt": {
    "name": "Express transport belt",
    "product": "express-transport-belt",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "iron-gear-wheel": 10.0,
      "fast-transport-belt": 1.0,
      "lubricant": 20.0
    },
    "fluids": [
      "lubricant"
    ],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistics 3"
  },
  "assembling-machine-3": {
    "name": "Assembling machine 3",
    "product": "assembling-machine-3",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "speed-module": 4.0,
      "assembling-machine-2": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Automation 3"
  },
  "tank": {
    "name": "Tank",
    "product": "tank",
    "out": 1.0,
    "time": 5.0,
    "inputs": {
      "engine-unit": 32.0,
      "steel-plate": 50.0,
      "iron-gear-wheel": 15.0,
      "advanced-circuit": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Tank"
  },
  "spidertron": {
    "name": "Spidertron",
    "product": "spidertron",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "exoskeleton-equipment": 4.0,
      "fission-reactor-equipment": 2.0,
      "rocket-launcher": 4.0,
      "processing-unit": 16.0,
      "low-density-structure": 150.0,
      "radar": 2.0,
      "efficiency-module-3": 2.0,
      "raw-fish": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Spidertron"
  },
  "fluid-wagon": {
    "name": "Fluid wagon",
    "product": "fluid-wagon",
    "out": 1.0,
    "time": 1.5,
    "inputs": {
      "iron-gear-wheel": 10.0,
      "steel-plate": 16.0,
      "pipe": 8.0,
      "storage-tank": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Fluid wagon"
  },
  "artillery-wagon": {
    "name": "Artillery wagon",
    "product": "artillery-wagon",
    "out": 1.0,
    "time": 4.0,
    "inputs": {
      "engine-unit": 64.0,
      "iron-gear-wheel": 10.0,
      "steel-plate": 40.0,
      "pipe": 16.0,
      "advanced-circuit": 20.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Artillery"
  },
  "modular-armor": {
    "name": "Modular armor",
    "product": "modular-armor",
    "out": 1.0,
    "time": 15.0,
    "inputs": {
      "advanced-circuit": 30.0,
      "steel-plate": 50.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Modular armor"
  },
  "power-armor": {
    "name": "Power armor",
    "product": "power-armor",
    "out": 1.0,
    "time": 20.0,
    "inputs": {
      "processing-unit": 40.0,
      "electric-engine-unit": 20.0,
      "steel-plate": 40.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Power armor"
  },
  "power-armor-mk2": {
    "name": "Power armor mk2",
    "product": "power-armor-mk2",
    "out": 1.0,
    "time": 25.0,
    "inputs": {
      "efficiency-module-2": 25.0,
      "speed-module-2": 25.0,
      "processing-unit": 60.0,
      "electric-engine-unit": 40.0,
      "low-density-structure": 30.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Power armor mk2"
  },
  "flamethrower": {
    "name": "Flamethrower",
    "product": "flamethrower",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "steel-plate": 5.0,
      "iron-gear-wheel": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Flamethrower"
  },
  "land-mine": {
    "name": "Land mine",
    "product": "land-mine",
    "out": 4.0,
    "time": 5.0,
    "inputs": {
      "steel-plate": 1.0,
      "explosives": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Land mine"
  },
  "rocket-launcher": {
    "name": "Rocket launcher",
    "product": "rocket-launcher",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "iron-plate": 5.0,
      "iron-gear-wheel": 5.0,
      "electronic-circuit": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Rocketry"
  },
  "combat-shotgun": {
    "name": "Combat shotgun",
    "product": "combat-shotgun",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "steel-plate": 15.0,
      "iron-gear-wheel": 5.0,
      "copper-plate": 10.0,
      "wood": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Military 4"
  },
  "chemical-science-pack": {
    "name": "Chemical science pack",
    "product": "chemical-science-pack",
    "out": 2.0,
    "time": 24.0,
    "inputs": {
      "engine-unit": 2.0,
      "advanced-circuit": 3.0,
      "sulfur": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Chemical science pack"
  },
  "military-science-pack": {
    "name": "Military science pack",
    "product": "military-science-pack",
    "out": 2.0,
    "time": 10.0,
    "inputs": {
      "piercing-rounds-magazine": 1.0,
      "grenade": 1.0,
      "stone-wall": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Military science pack"
  },
  "production-science-pack": {
    "name": "Production science pack",
    "product": "production-science-pack",
    "out": 3.0,
    "time": 21.0,
    "inputs": {
      "electric-furnace": 1.0,
      "productivity-module": 1.0,
      "rail": 30.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Production science pack"
  },
  "utility-science-pack": {
    "name": "Utility science pack",
    "product": "utility-science-pack",
    "out": 3.0,
    "time": 21.0,
    "inputs": {
      "low-density-structure": 3.0,
      "processing-unit": 2.0,
      "flying-robot-frame": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Utility science pack"
  },
  "express-underground-belt": {
    "name": "Express underground belt",
    "product": "express-underground-belt",
    "out": 2.0,
    "time": 2.0,
    "inputs": {
      "iron-gear-wheel": 80.0,
      "fast-underground-belt": 2.0,
      "lubricant": 40.0
    },
    "fluids": [
      "lubricant"
    ],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistics 3"
  },
  "express-splitter": {
    "name": "Express splitter",
    "product": "express-splitter",
    "out": 1.0,
    "time": 2.0,
    "inputs": {
      "fast-splitter": 1.0,
      "iron-gear-wheel": 10.0,
      "advanced-circuit": 10.0,
      "lubricant": 80.0
    },
    "fluids": [
      "lubricant"
    ],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistics 3"
  },
  "advanced-circuit": {
    "name": "Advanced circuit",
    "product": "advanced-circuit",
    "out": 1.0,
    "time": 6.0,
    "inputs": {
      "electronic-circuit": 2.0,
      "plastic-bar": 2.0,
      "copper-cable": 4.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Advanced circuit"
  },
  "processing-unit": {
    "name": "Processing unit",
    "product": "processing-unit",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "electronic-circuit": 20.0,
      "advanced-circuit": 2.0,
      "sulfuric-acid": 5.0
    },
    "fluids": [
      "sulfuric-acid"
    ],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Processing unit"
  },
  "logistic-robot": {
    "name": "Logistic robot",
    "product": "logistic-robot",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "flying-robot-frame": 1.0,
      "advanced-circuit": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistic robotics"
  },
  "construction-robot": {
    "name": "Construction robot",
    "product": "construction-robot",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "flying-robot-frame": 1.0,
      "electronic-circuit": 2.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Construction robotics"
  },
  "passive-provider-chest": {
    "name": "Passive provider chest",
    "product": "passive-provider-chest",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "steel-chest": 1.0,
      "electronic-circuit": 3.0,
      "advanced-circuit": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistic robotics"
  },
  "active-provider-chest": {
    "name": "Active provider chest",
    "product": "active-provider-chest",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "steel-chest": 1.0,
      "electronic-circuit": 3.0,
      "advanced-circuit": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistic system"
  },
  "storage-chest": {
    "name": "Storage chest",
    "product": "storage-chest",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "steel-chest": 1.0,
      "electronic-circuit": 3.0,
      "advanced-circuit": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistic robotics"
  },
  "buffer-chest": {
    "name": "Buffer chest",
    "product": "buffer-chest",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "steel-chest": 1.0,
      "electronic-circuit": 3.0,
      "advanced-circuit": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistic system"
  },
  "requester-chest": {
    "name": "Requester chest",
    "product": "requester-chest",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "steel-chest": 1.0,
      "electronic-circuit": 3.0,
      "advanced-circuit": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistic system"
  },
  "rocket-silo": {
    "name": "Rocket silo",
    "product": "rocket-silo",
    "out": 1.0,
    "time": 30.0,
    "inputs": {
      "steel-plate": 1000.0,
      "concrete": 1000.0,
      "pipe": 100.0,
      "processing-unit": 200.0,
      "electric-engine-unit": 200.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Rocket silo"
  },
  "cargo-landing-pad": {
    "name": "Cargo landing pad",
    "product": "cargo-landing-pad",
    "out": 1.0,
    "time": 30.0,
    "inputs": {
      "concrete": 200.0,
      "steel-plate": 25.0,
      "processing-unit": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Rocket silo"
  },
  "roboport": {
    "name": "Roboport",
    "product": "roboport",
    "out": 1.0,
    "time": 5.0,
    "inputs": {
      "steel-plate": 45.0,
      "iron-gear-wheel": 45.0,
      "advanced-circuit": 45.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Logistic robotics"
  },
  "substation": {
    "name": "Substation",
    "product": "substation",
    "out": 1.0,
    "time": 0.5,
    "inputs": {
      "steel-plate": 10.0,
      "advanced-circuit": 5.0,
      "copper-cable": 6.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Electric energy distribution 2"
  },
  "accumulator": {
    "name": "Accumulator",
    "product": "accumulator",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "iron-plate": 2.0,
      "battery": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Electric energy accumulators"
  },
  "electric-furnace": {
    "name": "Electric furnace",
    "product": "electric-furnace",
    "out": 1.0,
    "time": 5.0,
    "inputs": {
      "steel-plate": 10.0,
      "advanced-circuit": 5.0,
      "stone-brick": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Advanced material processing 2"
  },
  "beacon": {
    "name": "Beacon",
    "product": "beacon",
    "out": 1.0,
    "time": 15.0,
    "inputs": {
      "electronic-circuit": 20.0,
      "advanced-circuit": 20.0,
      "steel-plate": 10.0,
      "copper-cable": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Effect transmission"
  },
  "pumpjack": {
    "name": "Pumpjack",
    "product": "pumpjack",
    "out": 1.0,
    "time": 5.0,
    "inputs": {
      "steel-plate": 5.0,
      "iron-gear-wheel": 10.0,
      "electronic-circuit": 5.0,
      "pipe": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Oil gathering"
  },
  "oil-refinery": {
    "name": "Oil refinery",
    "product": "oil-refinery",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "steel-plate": 15.0,
      "iron-gear-wheel": 10.0,
      "stone-brick": 10.0,
      "electronic-circuit": 10.0,
      "pipe": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Oil processing"
  },
  "electric-engine-unit": {
    "name": "Electric engine unit",
    "product": "electric-engine-unit",
    "out": 1.0,
    "time": 10.0,
    "inputs": {
      "engine-unit": 1.0,
      "lubricant": 15.0,
      "electronic-circuit": 2.0
    },
    "fluids": [
      "lubricant"
    ],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Electric engine"
  },
  "flying-robot-frame": {
    "name": "Flying robot frame",
    "product": "flying-robot-frame",
    "out": 1.0,
    "time": 20.0,
    "inputs": {
      "electric-engine-unit": 1.0,
      "battery": 2.0,
      "steel-plate": 1.0,
      "electronic-circuit": 3.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Robotics"
  },
  "explosives": {
    "name": "Explosives",
    "product": "explosives",
    "out": 2.0,
    "time": 4.0,
    "inputs": {
      "sulfur": 1.0,
      "coal": 1.0,
      "water": 10.0
    },
    "fluids": [
      "water"
    ],
    "fluidOut": false,
    "machine": "chemical",
    "tech": "Explosives"
  },
  "battery": {
    "name": "Battery",
    "product": "battery",
    "out": 1.0,
    "time": 4.0,
    "inputs": {
      "sulfuric-acid": 20.0,
      "iron-plate": 1.0,
      "copper-plate": 1.0
    },
    "fluids": [
      "sulfuric-acid"
    ],
    "fluidOut": false,
    "machine": "chemical",
    "tech": "Battery"
  },
  "storage-tank": {
    "name": "Storage tank",
    "product": "storage-tank",
    "out": 1.0,
    "time": 3.0,
    "inputs": {
      "iron-plate": 20.0,
      "steel-plate": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Fluid handling"
  },
  "pump": {
    "name": "Pump",
    "product": "pump",
    "out": 1.0,
    "time": 2.0,
    "inputs": {
      "engine-unit": 1.0,
      "steel-plate": 1.0,
      "pipe": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Fluid handling"
  },
  "chemical-plant": {
    "name": "Chemical plant",
    "product": "chemical-plant",
    "out": 1.0,
    "time": 5.0,
    "inputs": {
      "steel-plate": 5.0,
      "iron-gear-wheel": 5.0,
      "electronic-circuit": 5.0,
      "pipe": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Oil processing"
  },
  "low-density-structure": {
    "name": "Low density structure",
    "product": "low-density-structure",
    "out": 1.0,
    "time": 15.0,
    "inputs": {
      "steel-plate": 2.0,
      "copper-plate": 20.0,
      "plastic-bar": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Low density structure"
  },
  "rocket-fuel": {
    "name": "Rocket fuel",
    "product": "rocket-fuel",
    "out": 1.0,
    "time": 15.0,
    "inputs": {
      "solid-fuel": 10.0,
      "light-oil": 10.0
    },
    "fluids": [
      "light-oil"
    ],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Rocket fuel"
  },
  "rocket-part": {
    "name": "Rocket part",
    "product": "rocket-part",
    "out": 1.0,
    "time": 3.0,
    "inputs": {
      "processing-unit": 10.0,
      "low-density-structure": 10.0,
      "rocket-fuel": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "silo",
    "tech": "Rocket silo"
  },
  "satellite": {
    "name": "Satellite",
    "product": "satellite",
    "out": 1.0,
    "time": 5.0,
    "inputs": {
      "low-density-structure": 100.0,
      "solar-panel": 100.0,
      "accumulator": 100.0,
      "radar": 5.0,
      "processing-unit": 100.0,
      "rocket-fuel": 50.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Rocket silo"
  },
  "nuclear-reactor": {
    "name": "Nuclear reactor",
    "product": "nuclear-reactor",
    "out": 1.0,
    "time": 8.0,
    "inputs": {
      "concrete": 500.0,
      "steel-plate": 500.0,
      "advanced-circuit": 500.0,
      "copper-plate": 500.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Nuclear power"
  },
  "centrifuge": {
    "name": "Centrifuge",
    "product": "centrifuge",
    "out": 1.0,
    "time": 4.0,
    "inputs": {
      "concrete": 100.0,
      "steel-plate": 50.0,
      "advanced-circuit": 100.0,
      "iron-gear-wheel": 100.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Uranium processing"
  },
  "nuclear-fuel": {
    "name": "Nuclear fuel",
    "product": "nuclear-fuel",
    "out": 1.0,
    "time": 90.0,
    "inputs": {
      "uranium-235": 1.0,
      "rocket-fuel": 1.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "centrifuge",
    "tech": "Kovarex enrichment process"
  },
  "nuclear-fuel-reprocessing": {
    "name": "Nuclear fuel reprocessing",
    "product": "uranium-238",
    "out": 3.0,
    "time": 60.0,
    "inputs": {
      "depleted-uranium-fuel-cell": 5.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "centrifuge",
    "tech": "Nuclear fuel reprocessing"
  },
  "uranium-fuel-cell": {
    "name": "Uranium fuel cell",
    "product": "uranium-fuel-cell",
    "out": 10.0,
    "time": 10.0,
    "inputs": {
      "iron-plate": 10.0,
      "uranium-235": 1.0,
      "uranium-238": 19.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Nuclear power"
  },
  "heat-exchanger": {
    "name": "Heat exchanger",
    "product": "heat-exchanger",
    "out": 1.0,
    "time": 3.0,
    "inputs": {
      "steel-plate": 10.0,
      "copper-plate": 100.0,
      "pipe": 10.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Nuclear power"
  },
  "heat-pipe": {
    "name": "Heat pipe",
    "product": "heat-pipe",
    "out": 1.0,
    "time": 1.0,
    "inputs": {
      "steel-plate": 10.0,
      "copper-plate": 20.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Nuclear power"
  },
  "steam-turbine": {
    "name": "Steam turbine",
    "product": "steam-turbine",
    "out": 1.0,
    "time": 3.0,
    "inputs": {
      "iron-gear-wheel": 50.0,
      "copper-plate": 50.0,
      "pipe": 20.0
    },
    "fluids": [],
    "fluidOut": false,
    "machine": "assembler",
    "tech": "Nuclear power"
  }
};

// Multi-output recipes are currently added manually on the canvas.
RECIPES['advanced-oil-processing']={name:'Advanced oil processing',product:'petroleum-gas',out:55,time:5,inputs:{water:50,'crude-oil':100},outputs:{'heavy-oil':25,'light-oil':45,'petroleum-gas':55},fluids:['water','crude-oil','heavy-oil','light-oil','petroleum-gas'],fluidOut:true,machine:'refinery',tech:'Advanced oil processing',manualOnly:true};
