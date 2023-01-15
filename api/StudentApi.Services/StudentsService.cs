using StudentApi.Models.Students;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentApi.Services
{
    public class StudentsService : IStudentsService
    {
        public List<Student> students = new List<Student>();

        public StudentsService()
        {
            students.Add(new Student
            {
                Id = Guid.NewGuid().ToString(),
                FirstName = "Marty",
                LastName = "McFly",
                Email = "back.future@test.com",
                Major = "History",
                GPA = 90
            });

            students.Add(new Student {
                Id = Guid.NewGuid().ToString(),
                FirstName = "Emmett",
                LastName = "Brown",
                Email = "dr.brown@test.com",
                Major = "Physics",
                GPA = 60
            });

            students.Add(new Student
            {
                Id = Guid.NewGuid().ToString(),
                FirstName = "Biff",
                LastName = "Tannen",
                Email = "biff@test.com",
                Major = "PE",
                GPA = 40
            });
        }

        /// <summary>
        /// Adds a new student to the system
        /// </summary>
        /// <param name="student"></param>
        /// <returns></returns>
     
        public bool AddStudent(Student student)
        {
            try 
            {
                student.Id = Guid.NewGuid().ToString();
                students.Add(student);
                return true;
            }
            catch 
            {
                return false;
            }
        }

        /// <summary>
        /// removes a student from the system
        /// </summary>
        /// <param name="Id"></param>
        /// <returns></returns>
        public bool DeleteStudent(string Id)
        {
             try 
            {
                Student student = students.Find(student => student.Id == Id);
                if(student == null) return false;

                students.Remove(student);
                return true;
            }
            catch 
            {
                return false;
            }
        }

        /// <summary>
        /// Returns all of the students currently in the system
        /// </summary>
        /// <returns></returns>
        public List<Student> GetAllStudents()
        {
            return students;
        }
    }
}
