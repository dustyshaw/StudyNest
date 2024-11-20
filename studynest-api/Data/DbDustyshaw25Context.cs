using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace studynest_api.Data;

public partial class DbDustyshaw25Context : DbContext
{
    public DbDustyshaw25Context()
    {
    }

    public DbDustyshaw25Context(DbContextOptions<DbDustyshaw25Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Course> Courses { get; set; }

    public virtual DbSet<Courseenroll> Courseenrolls { get; set; }

    public virtual DbSet<Courseunit> Courseunits { get; set; }

    public virtual DbSet<Studytask> Studytasks { get; set; }

    public virtual DbSet<Unit> Units { get; set; }

    public virtual DbSet<UnitTask> UnitTasks { get; set; }

    public virtual DbSet<Useraccount> Useraccounts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("user id= dustyshaw_25; password=323970372476; server=database-1.cisqkskacvfb.us-west-2.rds.amazonaws.com; database= db_dustyshaw_25;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Course>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("course_pkey");

            entity.ToTable("course", "studynestdb");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Description)
                .HasMaxLength(500)
                .HasColumnName("description");
            entity.Property(e => e.Ispublic).HasColumnName("ispublic");
            entity.Property(e => e.Title)
                .HasMaxLength(30)
                .HasColumnName("title");
        });

        modelBuilder.Entity<Courseenroll>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("courseenroll_pkey");

            entity.ToTable("courseenroll", "studynestdb");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Courseid).HasColumnName("courseid");
            entity.Property(e => e.Userid).HasColumnName("userid");

            entity.HasOne(d => d.Course).WithMany(p => p.Courseenrolls)
                .HasForeignKey(d => d.Courseid)
                .HasConstraintName("courseenroll_courseid_fkey");

            entity.HasOne(d => d.User).WithMany(p => p.Courseenrolls)
                .HasForeignKey(d => d.Userid)
                .HasConstraintName("courseenroll_userid_fkey");
        });

        modelBuilder.Entity<Courseunit>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("courseunit_pkey");

            entity.ToTable("courseunit", "studynestdb");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Courseid).HasColumnName("courseid");
            entity.Property(e => e.Stackposition).HasColumnName("stackposition");
            entity.Property(e => e.Unitid).HasColumnName("unitid");

            entity.HasOne(d => d.Course).WithMany(p => p.Courseunits)
                .HasForeignKey(d => d.Courseid)
                .HasConstraintName("courseunit_courseid_fkey");

            entity.HasOne(d => d.Unit).WithMany(p => p.Courseunits)
                .HasForeignKey(d => d.Unitid)
                .HasConstraintName("courseunit_unitid_fkey");
        });

        modelBuilder.Entity<Studytask>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("task_pkey");

            entity.ToTable("studytask", "studynestdb");

            entity.Property(e => e.Id)
                .HasDefaultValueSql("nextval('studynestdb.task_id_seq'::regclass)")
                .HasColumnName("id");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.Duedate).HasColumnName("duedate");
            entity.Property(e => e.Eventend).HasColumnName("eventend");
            entity.Property(e => e.Eventstart).HasColumnName("eventstart");
            entity.Property(e => e.Iscomplete).HasColumnName("iscomplete");
            entity.Property(e => e.Title)
                .HasMaxLength(30)
                .HasColumnName("title");
        });

        modelBuilder.Entity<Unit>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("unit_pkey");

            entity.ToTable("unit", "studynestdb");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Title)
                .HasMaxLength(30)
                .HasColumnName("title");
        });

        modelBuilder.Entity<UnitTask>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("unit_task_pkey");

            entity.ToTable("unit_task", "studynestdb");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Stackposition).HasColumnName("stackposition");
            entity.Property(e => e.Taskid).HasColumnName("taskid");
            entity.Property(e => e.Unitid).HasColumnName("unitid");

            entity.HasOne(d => d.Task).WithMany(p => p.UnitTasks)
                .HasForeignKey(d => d.Taskid)
                .HasConstraintName("unit_task_taskid_fkey");

            entity.HasOne(d => d.Unit).WithMany(p => p.UnitTasks)
                .HasForeignKey(d => d.Unitid)
                .HasConstraintName("unit_task_unitid_fkey");
        });

        modelBuilder.Entity<Useraccount>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("useraccount_pkey");

            entity.ToTable("useraccount", "studynestdb");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.AuthId).HasColumnName("auth_id");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.Lastactivedate).HasColumnName("lastactivedate");
            entity.Property(e => e.Streak).HasColumnName("streak");
            entity.Property(e => e.Username)
                .HasMaxLength(30)
                .HasColumnName("username");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
