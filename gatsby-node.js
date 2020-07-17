// here we're defining whatever items we're pulling from Airtable which might be
// totally empty. These two fields are from the Info table and will likely be 100%
// empty until at least after Paradigm restructures.

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type AirtableData implements Node {
        Name2: String
        Email2: String
      }
    `
  createTypes(typeDefs)
}
