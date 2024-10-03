var APP_DATA = {
  "scenes": [
    {
      "id": "0-eingang",
      "name": "Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.1516508618462815,
        "pitch": 0.26929451455581344,
        "fov": 1.5117548891265455
      },
      "linkHotspots": [
        {
          "yaw": 2.014649286252311,
          "pitch": 0.9669865986228281,
          "rotation": 0,
          "target": "2-flur"
        },
        {
          "yaw": 2.4235575119086743,
          "pitch": 0.2633053697347876,
          "rotation": 1.5707963267948966,
          "target": "1-kche"
        },
        {
          "yaw": 2.029095539765753,
          "pitch": 0.1572563788499579,
          "rotation": 0.7853981633974483,
          "target": "3-schlafzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kche",
      "name": "Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7738270507584675,
          "pitch": 0.5807270021857907,
          "rotation": 7.0685834705770345,
          "target": "2-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-flur",
      "name": "Flur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5458682544955664,
          "pitch": 0.7530730030476391,
          "rotation": 0,
          "target": "3-schlafzimmer"
        },
        {
          "yaw": 2.3097616990646745,
          "pitch": 0.413813800092079,
          "rotation": 5.497787143782138,
          "target": "1-kche"
        },
        {
          "yaw": -0.779839319010712,
          "pitch": 0.5322629503329921,
          "rotation": 0,
          "target": "4-bad"
        },
        {
          "yaw": -1.3679881315695805,
          "pitch": 0.43153924779829467,
          "rotation": 0,
          "target": "5-wohnzimmer"
        },
        {
          "yaw": 2.7693565222253724,
          "pitch": 0.3695873740573674,
          "rotation": 0,
          "target": "0-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.923101255420491,
          "pitch": 0.44157662682451715,
          "rotation": 0,
          "target": "2-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bad",
      "name": "Bad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5519988893734045,
          "pitch": 0.6152431693533966,
          "rotation": 0,
          "target": "2-flur"
        },
        {
          "yaw": -0.6894951730696732,
          "pitch": 0.058334194606461054,
          "rotation": 5.497787143782138,
          "target": "1-kche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wohnzimmer",
      "name": "Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2694059128079775,
          "pitch": 0.3716076285620691,
          "rotation": 0,
          "target": "6-balkon"
        },
        {
          "yaw": -1.1783418328411202,
          "pitch": 0.3170358954800321,
          "rotation": 0,
          "target": "2-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-balkon",
      "name": "Balkon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7944869371532768,
          "pitch": 0.5504720193354018,
          "rotation": 0,
          "target": "5-wohnzimmer"
        },
        {
          "yaw": -0.6172647092418408,
          "pitch": 0.1466665876231481,
          "rotation": 0,
          "target": "2-flur"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "B11",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
