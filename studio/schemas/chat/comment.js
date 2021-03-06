import React from "react"

export default {
  title: "Comment",
  name: "comment",
  type: "document",
  // readOnly: true,
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "Content",
      name: "content",
      type: "text"
    },
    {
      title: "user",
      name: "user",
      type: "reference",
      weak: true,
      to: [{ type: "user" }]
    }
  ]
}
