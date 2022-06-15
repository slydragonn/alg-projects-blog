import styled from 'styled-components'

const categories = ['JavaScript', 'React', 'HTML', 'CSS', 'POO', 'Functions', 'Games', 'Python', 'NodeJS', 'Algorithms', 'Data structures', 'Bash']

const Select = styled.select`
    color: white;
    background-color: rgb(13, 148, 136);
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgb(13, 148, 136);
    transition: all .3s;

    &:focus{
      outline: none;
    }

    &:hover{
      background-color: transparent;
    }
    & option{
      background-color: rgb(13, 148, 136);
    }
`

const CategoryMenu = () => {
  return (
    <Select name='select' defaultValue='All'>
      <option value='All'>All</option>
      {
        categories.map(category => <option key={`menu-${category}`} value={category}>{category}</option>)
        }
    </Select>
  )
}

const CategoryFullWidth = () => {
  return (
    <div className='hidden md:flex w-full flex-wrap justify-center items-center'>
      {
        categories.map(category => (
          <div key={category} className='z-10 flex items-center justify-center w-32 h-8 text-center bg-teal-600 p-1 rounded-lg m-3 cursor-pointer border border-teal-600 hover:bg-transparent hover:scale-105 duration-300'>
            <p className='font-semibold'>{category}</p>
          </div>
        ))
      }
    </div>
  )
}

const Category = () => {
  return (
    <section className='relative w-4/5 flex justify-center'>
      <CategoryFullWidth />
      <div className='flex md:hidden'>
        <span className='mr-4 font-semibold text-lg'>Filter:</span>
        <CategoryMenu />
      </div>
    </section>
  )
}

export default Category
