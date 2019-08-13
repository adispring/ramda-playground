export const searchItem = {
  highlights: [
    {
      length: 2,
      offset: 0
    },
    {
      length: 1,
      offset: 5
    }
  ],
  title: '这里很精彩，欢迎光临'
}

export const searchItemSub = {
  highlights: [
    {
      length: 3,
      offset: 1,
      type: 1,
    },
    {
      length: 4,
      offset: 4,
      type: 1,
    }
  ],
  title: '这里同样精彩，欢迎光临',
  subtitle: '副标题其实也很精彩的，赶紧看看吧'
}

export const searchFavGroupAndFriend = {
  "contacts": [
    {
      "id": "123",
      "type": 1
    },
    {
      "id": "124",
      "type": 1
    },
    {
      "id": "456"
    },
    {
      "id": "457"
    }
  ],
  "groups": {
    "123": {
      "id": "123",
      "preview": {
        "createTime": 0,
        "highlights": [
          {
            "length": 1,
            "offset": 4,
            "type": 1
          },
          {
            "length": 1,
            "offset": 6,
            "type": 1
          }
        ],
        "subtitle": "包含: 李大拿",
        "title": "Ramda 学术交流群"
      }
    },
    "124": {
      "id": "124",
      "preview": {
        "createTime": 0,
        "highlights": [
          {
            "length": 1,
            "offset": 4,
            "type": 1
          }
        ],
        "subtitle": "包含: 王大拿",
        "title": "Ramda 学术交流群2"
      }
    },
  },
  "users": {
    "456": {
      "id": "456",
      "preview": {
        "createTime": 0,
        "highlights": [
          {
            "length": 1,
            "offset": 6
          }
        ],
        "title": "adispring"
      }
    },
    "457": {
      "id": "457",
      "preview": {
        "createTime": 0,
        "highlights": [
          {
            "length": 1,
            "offset": 7,
            "type": 1
          },
          {
            "length": 1,
            "offset": 9,
            "type": 1
          }
        ],
        "subtitle": "昵称: Hello, World",
        "title": "高大全"
      }
    },
  }
}

console.log(searchFavGroupAndFriend)