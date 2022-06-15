import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true
    },
    category: {
      type: 'string',
      description: 'The categories of the post',
      required: true
    },
    summary: {
      type: 'string',
      description: 'Post summary',
      required: true
    },
    image: {
      type: 'string',
      description: 'Post Image',
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    }
  }
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post]
})
